import React from 'react'
import Navbar from '../components/misc/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/misc/footer/Footer'
import './scss/customerlayout.css'
import CartProvider from '../hooks/useCart'
const CustomerLayout = () => {
    return (
        <div className='customer-layout'>
            <Navbar />
            <div className="outlet-container">
                <CartProvider >
                    <Outlet />
                </CartProvider>
            </div>
            <Footer />
        </div>
    );
};

export default CustomerLayout;
