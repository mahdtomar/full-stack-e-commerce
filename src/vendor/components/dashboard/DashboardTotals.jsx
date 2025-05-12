import React, { useEffect, useState } from 'react';
import Request from '../../../Api/Axios';
import InfoCard from './InfoCard';
import useFilteredDateQuery from '../../hooks/useFilteredDateQuery';

const DashboardTotalsData = () => {
    const [revenue, setRevenue] = useState(0);
    const [orders, setOrders] = useState(0);
    const query = useFilteredDateQuery()
    const fetchData = async () => {
        try {
            const [revRes, ordRes] = await Promise.all([
                Request("/analytics/revenue", "GET", true, query),
                Request("/analytics/orders-count", "GET", true, query),
            ]);
            setRevenue(revRes.data);
            setOrders(ordRes.data);
        } catch (err) {
            console.error("Failed to fetch analytics:", err);
        }
    };
    useEffect(() => { fetchData() }, [query])
    return (
        <div className="flex flex-col gap-4">
            <div className="flex2">
                <InfoCard title="Monthly Revenue" data={revenue} />
                <InfoCard title="Monthly Orders" data={orders} />
            </div>
        </div>
    );
};

export default DashboardTotalsData;
