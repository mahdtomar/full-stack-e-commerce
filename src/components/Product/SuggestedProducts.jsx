import { useEffect } from 'react'
import Request from '../../Api/Axios'
import log from '../../util/Log'
import ProductCard from '../store/ProductCard'
import productImage from './../../assets/images/test-product.png'
import './scss/SuggestedProducts.css'
const SuggestedProducts = ({ category }) => {
    log("suggestion category is :", category)
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
    const getSuggestedProducts = async (category) => {
        const products = await Request("/suggestions", "GET", false, { targetCategory: category })
        log('suggested products', products)
    }
    useEffect(() => {
        getSuggestedProducts(category);
    }, [])
    return (
        <div className='product-suggested-products flexv'>
            <h2>Browse More Products From The same category</h2>
            <div className="container flex2">
                {test_products.map(({ title, img, price, discount, }, i) => {
                    return <ProductCard key={i} title={title} img={img} price={price} discount={discount} />
                })}
            </div>
            <button className="primary">View More</button>
        </div>
    )
}

export default SuggestedProducts