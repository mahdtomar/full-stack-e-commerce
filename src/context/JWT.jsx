import { createContext, useContext, useState, useEffect } from "react";
import { setAccessToken, getAccessToken } from "./../util/tokenStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(getAccessToken());

    useEffect(() => {
        setAccessToken(authToken); 
    }, [authToken]);

    const login = async (userData, accessToken) => {
        setUser(userData);
        setAuthToken(accessToken); 
    };

    const logout = () => {
        setUser(null);
        setAuthToken(null);
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider