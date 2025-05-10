import React, { useEffect } from 'react'
import Request from '../../Api/Axios'

const ProductsList = () => {
    const [products, setProducts] = React.useState([])
    const getProducts = async () => {
        const res = await Request("/get-detailed-products", "GET", true)
        console.log(res)
        setProducts(res.data)
    }
    useEffect(() => { getProducts() }, [])
    return (
        <div>ProductsList</div>
    )
}

export default ProductsList