import React, { useContext } from 'react'
import ControlledInput from '../misc/ControlledInput'
import { CustomerOrderContext } from '../../context/CustomerOrderProvider'
import './scss/customerDetails.css'
const CustomerDetails = () => {
  const { customerDetails, updateCustomerDetails } = useContext(CustomerOrderContext)
  return (
    <div className='checkout-customer-details details-section flexv'>
      <h2>Customer Details</h2>
      <div className="flex2 input-container">
        <ControlledInput
          id="name"
          value={customerDetails.name}
          onChange={updateCustomerDetails}
          placeholder={"Full Name *"}
        />
        <ControlledInput
          id="email"
          value={customerDetails.email}
          onChange={updateCustomerDetails}
          placeholder={"Email *"}
        />
      </div>
      <div className='flex2 input-container'>
        <ControlledInput
          id="phoneNumber"
          value={customerDetails.phoneNumber}
          onChange={updateCustomerDetails}
          placeholder={"Phone Number *"}
        />
        <ControlledInput
          id="phoneNumber2"
          value={customerDetails.phoneNumber2}
          onChange={updateCustomerDetails}
          placeholder={"Additional Phone Number"}
        />
      </div>
    </div>
  )
}

export default CustomerDetails