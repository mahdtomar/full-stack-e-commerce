import { createContext, useState, useContext, useRef } from "react";
import './scss/useNotification.css';
import XCircle from './../assets/icons/XCircle.svg'
import Checks from './../assets/icons/Checks.svg'
import infoIcon from './../assets/icons/info.svg'
const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);
    const [shake, setShake] = useState(false);
    const timeoutRef = useRef(null);
    const ShakeRef = useRef(null);
    const shaking = () => {
        if (ShakeRef.current) {
            return
        }
        setShake(true)
        ShakeRef.current = setTimeout(() => {
            setShake(false)
            ShakeRef.current = null
        }, 1000);
    }
    const showNotification = (type, message) => {
        if (timeoutRef.current) {
            shaking()
            return;
        }
        setNotification({ type, message });
        timeoutRef.current = setTimeout(() => {
            setNotification(null)
            timeoutRef.current = null
        }, 3000);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification &&
                <>
                    <div className={`custom-alert ${notification.type} ${shake && "shake"} flex2`}>
                        <div className="icon-container">
                            {notification.type === "error" ? <img src={XCircle} alt="error icon" /> : notification.type === "success" ? <img src={Checks} alt="success icon" /> : <img src={infoIcon} alt="info icon" />}
                        </div>
                        {notification.message}
                    </div>
                </>
            }
        </NotificationContext.Provider>
    );
};
