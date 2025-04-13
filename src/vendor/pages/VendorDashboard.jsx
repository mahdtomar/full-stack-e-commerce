import React, { useEffect, useState } from 'react'
import Request from '../../Api/Axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VendorDashboard = () => {
    const [orders, setOrder] = useState([])
    const getOrders = async () => {
        const res = await Request("/vendor-orders", "GET", true)
        const formattedOrders = res.data.map(order => ({
            ...order,
            formattedDate: new Date(order.createdAt).toLocaleDateString('en-GB') // returns '04/04/2025'
        }));
        console.log(res)
        setOrder(formattedOrders)
    }
    useEffect(() => { getOrders() }, [])

    return (
        <>
            <div>VendorDashboard</div>
            <RenderLineChart data={orders} dataKey={"totalAmount"} xAxisDK={"formattedDate"} />
        </>
    )
}

export default VendorDashboard

// const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 500, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 90, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 1400, pv: 2400, amt: 2400 },];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                background: '#fff',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '4px'
            }}>
                <p>{`Sales: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const RenderLineChart = ({ data, dataKey, xAxisDK }) => {
    return (
        <LineChart width={900} height={400} data={data}>
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip content={<CustomTooltip />} />
            <YAxis />
            <XAxis dataKey={xAxisDK} />
        </LineChart>
    );
};