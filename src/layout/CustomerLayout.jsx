import React from 'react'
import Navbar from '../components/misc/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/misc/footer/Footer'
import './scss/customerlayout.css'
import CartProvider from '../hooks/useCart'
import CustomerOrderProvider from '../context/CustomerOrderProvider'
const CustomerLayout = () => {
    return (
        <div className='customer-layout'>
            <Navbar />
            <div className="outlet-container">
                <CustomerOrderProvider>
                    <CartProvider >
                        <Outlet />
                    </CartProvider>
                </CustomerOrderProvider>
            </div>
            <Footer />
        </div>
    );
};

export default CustomerLayout;
