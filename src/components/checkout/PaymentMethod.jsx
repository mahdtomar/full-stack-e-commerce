import React from 'react'
import './scss/paymentMethod.css'
import { useContext } from 'react'
import { CustomerOrderContext } from '../../context/CustomerOrderProvider'
const PaymentMethod = () => {
  const { updatePaymentMethod, paymentMethod } = useContext(CustomerOrderContext)
  return (
    <div className='checkout-payment-methods '>
      <h2>Payment Details</h2>
      <div className="container flexv">
        <label htmlFor="onDelivery" className='flex2'>
          <span>On Delivery</span>
          <input type="radio" name="payment-method" id="onDelivery" defaultChecked={paymentMethod === 'onDelivery'} onClick={e => updatePaymentMethod("onDelivery")} />
        </label>
        <label htmlFor="creditCard" className='flex2'>
          <span>Credit Card</span>
          <input type="radio" name="payment-method" id="creditCard" defaultChecked={paymentMethod === 'creditCard'} onClick={e => updatePaymentMethod("creditCard")} />
        </label>
      </div>
    </div>
  )
}

export default PaymentMethod