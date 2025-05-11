import React from 'react'
import OrdersCountChart from '../components/dashboard/OrdersCountChart';
import InfoCard from '../components/dashboard/InfoCard';
import DashboardTotals from '../components/dashboard/DashboardTotals';

const VendorDashboard = () => {

    return (
        <>
            <DashboardTotals />
            <OrdersCountChart />
        </>
    )
}

export default VendorDashboard

