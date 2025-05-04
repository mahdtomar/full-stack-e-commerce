import { useEffect, useState } from 'react'
import Request from '../../Api/Axios'
import log from '../../util/Log'
import ProductCard from '../store/ProductCard'
import productImage from './../../assets/images/test-product.png'
import './scss/SuggestedProducts.css'
const SuggestedProducts = ({ category, id }) => {
    log("suggestion category is :", category)
    const [suggestedProducts, setSuggestedProducts] = useState([])
    const test_products = [
        {
            title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
            img: productImage,
            price: 35,
            discount: "",
        },
        {
            title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
            img: productImage,
            price: 50,
            discount: 35,
        },
        {
            title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
            img: productImage,
            price: 35,
            discount: "",
        },
        {
            title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
            img: productImage,
            price: 35,
            discount: "",
        },
    ]
    const getSuggestedProducts = async () => {
        const products = await Request("/suggestions", "GET", false, { suggestedCategory: category, productId: id })
        setSuggestedProducts(products.data)
        log('suggested products', products)
    }
    useEffect(() => {
        getSuggestedProducts();
    }, [category])
    return (
        <div className='product-suggested-products flexv'>
            <h2>Browse More Products From The same category</h2>
            <div className="slider">
                <div className="container flex2">
                    {suggestedProducts.map((product, i) => {
                        return <ProductCard key={i} title={product.title} img={product.image} price={product.finalPrice} discount={product.discount} id={product._id} rating={product.rating} cloudinary_url={product.cloudinary_url} discountPercentage={product?.discountPercentage} basePrice={product.basePrice} />
                    })}
                </div>
            </div>
            <button className="primary">View More</button>
        </div>
    )
}

export default SuggestedProducts