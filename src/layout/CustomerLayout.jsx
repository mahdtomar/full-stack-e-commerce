import React, { useEffect } from 'react'
import Navbar from '../components/misc/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/misc/footer/Footer'
import './scss/customerlayout.css'
import CartProvider from '../hooks/useCart'
import CustomerOrderProvider from '../context/CustomerOrderProvider'
const CustomerLayout = () => {
    const testAPI = async () => {
        try {
            const headers = new Headers();
            headers.append('login', 'admin');
            headers.append('password', 'admin');
            headers.append('api-key', 'fb8e6227-868c-47b8-b7ec-d5b7609222e9');
            headers.append('Content-Type', 'application/json');
            headers.append('db', 'TESTING-WEBSITE');
            headers.append('Cookie', 'session_id=P3IvjdAmoBPnvATeOjAeyZ_fmEpFzvV-79xecUj0tTc4hiOf-GTRLknIF11DuUWy-FwfB4VmOKKrVp_nwHgb');

            const body = JSON.stringify({
                "fields": ["partner_id", "order_line"],
                "values": {
                    "partner_id": 1,
                    "order_line": [
                        [0, 0, {
                            "product_id": 1,
                            "product_uom_qty": 2,
                            "price_unit": 100
                        }]
                    ]
                }
            });

            const requestOptions = {
                method: 'POST', // Or POST, if the body is required in the request
                headers: headers,
                body: JSON.stringify(body)
            };

            const response = await fetch('https://odoo.tanmiatech.com/send_request?model=sale.order', requestOptions);
            const result = await response.json(); // Parsing JSON from response
            console.log(result);
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };


    useEffect(() => { testAPI() }, [])
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
