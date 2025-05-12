import React from 'react'
import OrdersCountChart from '../components/dashboard/OrdersCountChart';
import DashboardTotals from '../components/dashboard/DashboardTotals';
import { DateRangeProvider } from '../context/DateRangeContext';
import DateFilter from '../components/misc/DateFilter';
import OrdersTypeChart from '../components/dashboard/OrdersTypeChart';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const VendorDashboard = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];
    return (
        <>
            <DateRangeProvider>
                <DateFilter />
                <DashboardTotals />
                <OrdersCountChart />
                <OrdersTypeChart />
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                    </PieChart>
                </ResponsiveContainer>
            </DateRangeProvider>
        </>
    )
}

export default VendorDashboard

