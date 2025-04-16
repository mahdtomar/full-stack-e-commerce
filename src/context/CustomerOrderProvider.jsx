import React, { createContext, useState } from 'react';

export const CustomerOrderContext = createContext();

const CustomerOrderProvider = ({ children }) => {
    const [customerDetails, setCustomerDetails] = useState({
        customerName: '',
        email: '',
        phoneNumber: '',
        phoneNumber2: '',
    });

    const [shippingDetails, setShippingDetails] = useState({
        city: '',
        postCode: '',
        state: '',
        fullAddress: '',
        additionalDetails: '',
    });
    const [paymentMethod, setPaymentMethod] = useState("onDelivery");
    const updatePaymentMethod = (method) => {
        setPaymentMethod(method)
    }
    const updateCustomerDetails = (field, value) => {
        setCustomerDetails((prev) => ({ ...prev, [field]: value }));
    };

    const updateShippingDetails = (field, value) => {
        setShippingDetails((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <CustomerOrderContext.Provider
            value={{
                customerDetails,
                shippingDetails,
                paymentMethod,
                updateCustomerDetails,
                updateShippingDetails,
                updatePaymentMethod
            }}
        >
            {children}
        </CustomerOrderContext.Provider>
    );
};

export default CustomerOrderProvider;
