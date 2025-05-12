import React, { useEffect, useState } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Request from '../../../Api/Axios';
import useFilteredDateQuery from '../../hooks/useFilteredDateQuery';
const OrdersTypeChart = () => {
    const query = useFilteredDateQuery()
    const [data, setData] = useState([
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ])
    const getOrderTypes = async () => {
        const res = await Request("/analytics/orders-type", 'GET', true, query)
        console.log(res.data)
        setData(res.data)
    }
    useEffect(() => {
        getOrderTypes();
    }, [query])
    return (
        <div style={{ height: 300 }}>
            data
            <RenderChart data={data} />
        </div>
    )
}

export default OrdersTypeChart

const RenderChart = ({ data }) => {
    return <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
            <Pie
                dataKey="value"
                startAngle={0}
                endAngle={360}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>
}