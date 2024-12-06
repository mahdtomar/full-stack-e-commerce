import productImage from './../../assets/images/test-product.png'
import ProductCard from './ProductCard'
import './scss/ProductPages.css'
const ProductPages = () => {
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
        {
            title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
            img: productImage,
            price: 50,
            discount: 35,
        },
    ]
    return (
        <div className="productPages-root">
            <div className="container">
                <h1>Shop All Products</h1>
                <div className="products-container flex2">
                    {test_products.map(({ title, img, price, discount, }) => {
                        return <ProductCard title={title} img={img} price={price} discount={discount} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductPages