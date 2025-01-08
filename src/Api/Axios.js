import axios from "axios";

const Request = async (
    endpoint,
    method,
    credentials,
    params = {},
    headers,
    body
) => {
    const config = {
        method: method,
        url: `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        params: params,
        data: body,
        withCredentials: credentials || false,
    };
    try {
        const res = await axios(config);
        return res.data;
    } catch (err) {
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

export default Request;
