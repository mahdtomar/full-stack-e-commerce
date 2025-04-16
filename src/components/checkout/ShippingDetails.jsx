import React, { useContext } from 'react'
import { CustomerOrderContext } from '../../context/CustomerOrderProvider'
import ControlledInput from '../misc/ControlledInput'

const ShippingDetails = () => {
    const { shippingDetails, updateShippingDetails } = useContext(CustomerOrderContext)
    return (
        <div>
            <h2>Shipping Details</h2>
            <div className="flex2">
                <ControlledInput
                    id="city"
                    value={shippingDetails.city}
                    onChange={updateShippingDetails}
                    placeholder={"City *"}
                />
                <ControlledInput
                    id="postCode"
                    value={shippingDetails.postCode}
                    onChange={updateShippingDetails}
                    placeholder={"Post Code *"}

                />
                <ControlledInput
                    id="state"
                    value={shippingDetails.state}
                    onChange={updateShippingDetails}
                    placeholder={"State / Government *"}

                />
            </div>
            <div>
                <ControlledInput
                    id="fullAddress"
                    value={shippingDetails.fullAddress}
                    onChange={updateShippingDetails}
                    placeholder={"Street / Full Address *"}

                />
            </div>
            <div>
                <ControlledInput
                    id="additionalDetails"
                    value={shippingDetails.additionalDetails}
                    onChange={updateShippingDetails}
                    placeholder={"Delivary Notes / Landmark"}

                />
            </div>
        </div>
    )
}

export default ShippingDetails