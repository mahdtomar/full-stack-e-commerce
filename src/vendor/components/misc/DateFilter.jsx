import React from 'react';
import { useDateRange } from './../../context/DateRangeContext';

const monthsArr = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const generateYearOptions = (start = 2022) => {
    const currentYear = new Date().getUTCFullYear();
    return Array.from({ length: currentYear - start + 2 }, (_, i) => start + i);
};

const DateFilter = () => {
    const {
        fromMonth, setFromMonth,
        fromYear, setFromYear,
        toMonth, setToMonth,
        toYear, setToYear,
        showToDate, setShowToDate
    } = useDateRange();
    return (
        <div className="flex gap-4 items-center">
            <div>
                <label className="font-semibold">From:</label>
                <div className="flex gap-2">
                    <select value={fromMonth} onChange={(e) => { setFromMonth(+e.target.value) }} className="p-2 rounded border">
                        {monthsArr.map((month, i) => <option key={i} value={i}>{month}</option>)}
                    </select>
                    <select value={fromYear} onChange={(e) => setFromYear(+e.target.value)} className="p-2 rounded border">
                        {generateYearOptions().map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                </div>
            </div>

            <div>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={showToDate} onChange={() => setShowToDate(prev => !prev)} />
                    Add 'To' Date
                </label>
            </div>

            {showToDate && (
                <div>
                    <label className="font-semibold">To:</label>
                    <div className="flex gap-2">
                        <select value={toMonth} onChange={(e) => setToMonth(+e.target.value)} className="p-2 rounded border">
                            {monthsArr.map((month, i) => <option key={i} value={i}>{month}</option>)}
                        </select>
                        <select value={toYear} onChange={(e) => setToYear(+e.target.value)} className="p-2 rounded border">
                            {generateYearOptions().map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateFilter;
