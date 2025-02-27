import axios from "axios";
import log from "../util/Log";

// Utility functions to handle token storage in localStorage
export const getAccessToken = () => localStorage.getItem("access_token") || "";
export const setAccessToken = (token) =>
    localStorage.setItem("access_token", token);

const refreshErrors = [
    "refresh token expired",
    "login required",
    "refresh token not found",
    "token expired",
];

// Create axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});
const Request = async (
    endpoint,
    method,
    credentials,
    params = {},
    headers = { "Content-Type": "application/json" },
    body
) => {
    // Check if body is FormData
    if (body instanceof FormData) {
        delete headers["Content-Type"]; 
    }
    const config = {
        method,
        url: endpoint,
        headers: {
            ...headers,
            Authorization: `Bearer ${getAccessToken()}`, // Always attach the token
        },
        params,
        data: body,
        withCredentials: credentials || false,
    };

    try {
        const res = await axiosInstance(config);
        return res.data;
    } catch (err) {
        if (err.response?.data?.message === "login required") {
            console.log("Login required");
        }
        if (err.response) {
            console.error("Error response:", err.response.data);
            return err.response.data;
        } else if (err.request) {
            console.error("No response received:", err.request);
            return { error: true, message: "No response from server." };
        } else {
            console.error("Request setup error:", err.message);
            return { error: true, message: err.message };
        }
    }
};

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${getAccessToken()}`;
        log("Request Headers:", config.headers);
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        log("Error message:", error.response?.data?.message);
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            refreshErrors.includes(error.response?.data?.message)
        ) {
            originalRequest._retry = true;
            try {
                const res = (
                    await axios.post(
                        `${import.meta.env.VITE_BACKEND_URL}/refresh`,
                        {},
                        { withCredentials: true }
                    )
                ).data;
                log("accessToken", res.data);
                if (res.data.accessToken) {
                    setAccessToken(res.data.accessToken);
                    originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
                    return axiosInstance(originalRequest);
                }
            } catch (refreshError) {
                if (
                    refreshErrors.includes(refreshError.response?.data?.message)
                ) {
                    console.log(refreshError.response?.data?.message);
                    log("Login required");
                    localStorage.setItem(
                        "redirectAfterLogin",
                        window.location.pathname + window.location.search
                    );
                    location.href = "/login";
                }
                log("Refresh token request failed:", refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default Request;
