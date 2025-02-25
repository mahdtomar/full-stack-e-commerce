import { useEffect, useRef, useState, useContext } from 'react'
import Request from '../../Api/Axios'
import productImage from './../../assets/images/test-product.png'
import ProductCard from './ProductCard'
import './scss/ProductPages.css'
import log from '../../util/Log'
import { storeFiltersContext } from './../../context/StoreFiltersContext'
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
    const { sort, setSort } = useContext(storeFiltersContext)
    const [error, setError] = useState(false)
    const getProducts = async (page, sort = "new-arrivals") => {
        try {
            setProducts([]);
            const res = await Request("/products", "GET", false, { limit: productsCount, page: page || 1, sort: sort })
            if (res.error) {
                setError(true)
                return
            }
            setCurrentPage(page || 1)
            log("products", res.data)
            setProducts(res.data)
            headerRef?.current.scrollIntoView({ behavior: "smooth", })
        } catch (err) {
            console.log(err)
        }
    }

    const getProductsCount = async () => {
        const res = await Request("/products-count", "GET", false)
        setTotalProducts(res.data)
    }

    useEffect(() => { getProducts(); getProductsCount(); }, [])
    useEffect(() => { getProducts(currentPage, sort); }, [sort])

    return (
        <div className="productPages-root">
            <div className="container">
                <h1 ref={headerRef}>Shop All Products</h1>
                <div className="products-container flex2">
                    {products?.map((product, i) => {
                        return <ProductCard key={i} title={product.title} img={product.image} price={product.salePrice} discount={product.discount} id={product._id} />
                    })}
                    {/* {test_products.map(({ title, img, price, discount, }, i) => {
                        return <ProductCard key={i} title={title} img={img} price={price} discount={discount} />
                    })} */}
                </div>
                <div className="pagination flex2" >
                    {error && <div>
                        <p>There was an error fetching products. Please try again later.</p>
                        <p>if the issue presist you can contact us at <a href="mailto:omarmahdyq@gmail.com">omarmahdyq@gmail.com</a></p>
                    </div>}
                    {totalProducts > 0 && Array((Math.ceil(totalProducts / productsCount))).fill(1).map((e, i) => {
                        // console.log(currentPage, i)
                        return <span key={i}
                            onClick={() => { getProducts(i + 1, sort) }}
                            aria-label={`Go to page ${i + 1}`}
                            className={currentPage === i + 1 ? "current" : ""
                            }> {i + 1}</span>
                    })}
                </div>
            </div>
        </div >
    )
}

export default ProductPages