import { useEffect, useRef, useState } from 'react'
import Request from '../../Api/Axios'
import productImage from './../../assets/images/test-product.png'
import ProductCard from './ProductCard'
import './scss/ProductPages.css'
import log from '../../util/Log'
const ProductPages = () => {
    // const test_products = [
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 35,
    //         discount: "",
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 50,
    //         discount: 35,
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 35,
    //         discount: "",
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 35,
    //         discount: "",
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 50,
    //         discount: 35,
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 35,
    //         discount: "",
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 50,
    //         discount: 35,
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 35,
    //         discount: "",
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 35,
    //         discount: "",
    //     },
    //     {
    //         title: "Grey Nike running sneakers testing to see if the font will fit 2 lines",
    //         img: productImage,
    //         price: 50,
    //         discount: 35,
    //     },
    // ]
    const headerRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(1)
    const productsCount = 20
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const getProducts = async (page, sort) => {
        const res = await Request("/products", "GET", true, { limit: productsCount, page: page || 1 })
        setCurrentPage(page || 1)
        log("products", res.data)
        setProducts(res.data)
        headerRef.current.scrollIntoView({ behavior: "smooth", })
    }
    const getProductsCount = async () => {
        const res = await Request("/products-count", "GET", true)
        setTotalProducts(res.data)
    }

    useEffect(() => { getProducts(); getProductsCount(); }, [])


    return (
        <div className="productPages-root">
            <div className="container">
                <h1 ref={headerRef}>Shop All Products</h1>
                <div className="products-container flex2">
                    {products.map(({ title, image, salePrice, discount, }, i) => {
                        return <ProductCard key={i} title={title} img={image} price={salePrice} discount={discount} />
                    })}
                    {/* {test_products.map(({ title, img, price, discount, }, i) => {
                        return <ProductCard key={i} title={title} img={img} price={price} discount={discount} />
                    })} */}
                </div>
                <div className="pagination flex2" >
                    {Array((Math.ceil(totalProducts / productsCount))).fill(1).map((e, i) => {
                        console.log(currentPage, i)
                        return <span key={i} onClick={() => { getProducts(i + 1) }} className={currentPage === i + 1 ? "current" : ""
                        }> {i + 1}</span>
                    })}
                </div>
            </div>
        </div >
    )
}

export default ProductPages