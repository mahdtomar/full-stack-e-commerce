import React, { useContext } from 'react'
import { CustomerOrderContext } from '../../context/CustomerOrderProvider'
import { useCart } from '../../hooks/useCart'

const PreviewOrderDetails = () => {
    const { customerDetails, shippingDetails, paymentMethod } = useContext(CustomerOrderContext)
    const { cartTotals } = useCart()
    return (
        <div>
            <div className="customer-details section">
                <InfoLine title={"name"} value={customerDetails.customerName} />
                <InfoLine title={"email"} value={customerDetails.email} />
                <InfoLine title={"Phone Number"} value={customerDetails.phoneNumber} />
                <InfoLine title={"Additional Phone Number"} value={customerDetails.phoneNumber2} />
            </div>
            <div className="shipping-details section">
                <InfoLine title={"city"} value={shippingDetails.city} />
                <InfoLine title={"post code"} value={shippingDetails.postCode} />
                <InfoLine title={"State"} value={shippingDetails.state} />
                <InfoLine title={"street / Full address"} value={shippingDetails.fullAddress} />
                <InfoLine title={"additional notes"} value={shippingDetails.additionalDetails} />
            </div>
            <div className="payment-details section">
                <InfoLine title={"payment method"} value={paymentMethod} />
                <InfoLine title={"Delivary Cost"} value={cartTotals.total > 150 ? `25` : `free`} />
                <InfoLine title={"Sub-Total"} value={cartTotals.total} />
                <InfoLine title={"Total"} value={`${cartTotals.total > 150 ? `${cartTotals.total + 25}USD` : `${cartTotals.total}USD`}`} />
            </div>
        </div>
    )
}
const InfoLine = ({ title, value }) => {
    return <p><span>{title}</span> : {value}</p>
}
export default PreviewOrderDetails