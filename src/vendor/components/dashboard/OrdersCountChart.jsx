import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Request from '../../../Api/Axios';
import useFilteredDateQuery from '../../hooks/useFilteredDateQuery';

const OrdersCountChart = () => {
    const [orders, setOrder] = useState([])
    const query = useFilteredDateQuery()
    const getOrders = async () => {
        try {
            const testOrders = await Request("/analytics/vendor-orders-Line-chart", "GET", true, query)
            setOrder(testOrders.data);
        } catch (err) {
            console.error("Failed to fetch analytics:", err);
        }
    };

    useEffect(() => { getOrders() }, [query])
    return (
        <div>
            <RenderLineChart data={orders} dataKey={"orderCount"} xAxisDK={"date"} />
        </div>
    )
}

export default OrdersCountChart

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                background: '#fff',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '4px'
            }}>
                <p><strong>Date:</strong> {label}</p>
                <p><strong>Orders:</strong> {payload[0].value}</p>
            </div>
        );
    }
    return null;
};


const RenderLineChart = ({ data, dataKey, xAxisDK }) => {
    return (
        <ResponsiveContainer width="100%" className={'orders-count-container'} height={300}>
            <LineChart data={data}>
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip content={<CustomTooltip />} />
                <YAxis />
                <XAxis dataKey={xAxisDK} />
            </LineChart>
        </ResponsiveContainer>
    );
};