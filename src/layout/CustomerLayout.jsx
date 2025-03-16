import React from 'react'
import Navbar from '../components/misc/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/misc/footer/Footer'
import './scss/customerlayout.css'
const CustomerLayout = () => {
    return (
        <div className='customer-layout'>
            <Navbar />
            <div className="outlet-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default CustomerLayout;
