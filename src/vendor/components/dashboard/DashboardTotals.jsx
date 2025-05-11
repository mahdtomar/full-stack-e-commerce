import React, { useEffect, useState } from 'react'
import Request from '../../../Api/Axios'
import InfoCard from './InfoCard'

const DashboardTotals = () => {
    const [revenue, setRevenue] = useState(0)
    const [orders, setOrders] = useState(0)
    const monthsArr = ["Jan", "Feb"]
    const getMonthlyRevenue = async () => {
    }
    const getMonthlyOrders = async () => {
        const res = await Request("/analytics/revenue", "GET", true, { nab: "nab" })
        setRevenue(res.data)
    }
    useEffect(() => { getMonthlyOrders(); getMonthlyRevenue() }, [])
    return (
        <div className="flex2">
            <InfoCard title="Montly Reveneu" data={revenue} />
            <InfoCard title="Monthly Orders" data={''} />
        </div>
    )
}

export default DashboardTotals