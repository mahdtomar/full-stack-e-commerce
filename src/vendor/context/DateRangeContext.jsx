import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNotification } from '../../hooks/useNotification';

const DateRangeContext = createContext();

export const useDateRange = () => useContext(DateRangeContext);
export const DateRangeProvider = ({ children }) => {
    const currentDate = new Date();
    const [fromMonth, setFromMonth] = useState(currentDate.getMonth());
    const [fromYear, setFromYear] = useState(currentDate.getFullYear());
    const { showNotification } = useNotification();
    const [toMonth, setToMonth] = useState(currentDate.getMonth());
    const [toYear, setToYear] = useState(currentDate.getFullYear());
    const [showToDate, setShowToDate] = useState(false);
    const [dateError, setDateError] = useState("");

    const isDateRangeValid = () => {
        const fromDate = new Date(Date.UTC(fromYear, fromMonth));
        const toDate = new Date(Date.UTC(toYear, toMonth));
        return toDate >= fromDate;
    };

    useEffect(() => {
        if (showToDate && !isDateRangeValid()) {
            setDateError("The 'To' date must be after the 'From' date.");
            showNotification("error", "The 'To' date must be after the 'From' date.");
        } else {
            setDateError(""); // Clear error if valid or not needed
        }
    }, [showToDate, fromMonth, fromYear, toMonth, toYear, dateError]);

    return (
        <DateRangeContext.Provider
            value={{
                fromMonth, setFromMonth,
                fromYear, setFromYear,
                toMonth, setToMonth,
                toYear, setToYear,
                showToDate, setShowToDate,
                isDateRangeValid,
                dateError, setDateError,
            }}
        >
            {children}
        </DateRangeContext.Provider>
    );
};