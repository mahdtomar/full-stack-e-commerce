import ProductCard from '../store/ProductCard'
import productImage from './../../assets/images/test-product.png'
import './scss/SuggestedProducts.css'
const SuggestedProducts = () => {
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
    return (
        <div className='product-suggested-products flexv'>
            <h2>Browse More Products From The same category</h2>
            <div className="container flex2">
                {test_products.map(({ title, img, price, discount, }) => {
                    return <ProductCard title={title} img={img} price={price} discount={discount} />
                })}
            </div>
            <button className="primary">View More</button>
        </div>
    )
}

export default SuggestedProducts