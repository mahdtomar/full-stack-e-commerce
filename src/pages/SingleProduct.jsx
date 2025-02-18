import { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../components/misc/footer/Footer"
import Navbar from "../components/misc/navbar/Navbar"
import Comments from "../components/Product/Comments"
// import Description from "../components/Product/Description"
// import testImage from './../assets/images/chips.png'
import Header from "../components/Product/Header"
import SuggestedProducts from "../components/Product/SuggestedProducts"
import Request from "../Api/Axios"
import './scss/singleproduct.css'
const SingleProduct = () => {
    const descriptionRef = useRef(null)
    const location = useLocation();
    const [product, setProduct] = useState({})
    const [showDescription, setShowDescription] = useState(false)
    const getProductInfo = async () => {
        const productDetails = await Request(`/product/${location.state?.productId}`, "GET", true)
        setProduct(productDetails.data)
        console.log(productDetails)
    }
    useEffect(() => {
        getProductInfo();
    }, [])
    useEffect(() => {
        descriptionRef.current.innerHTML = product.description
    }, [product])
    return (
        <>
            <Navbar />
            {/* <Header title="Grey Nike running sneakers testing to see if the font will fit 2 lines" description="this is a description for the product this is a description for the product this is a description for the product this is a description for the product this is a description for the product this is a description for the product this is a description for the product " price={50} image={testImage} rating={3.3} discount={35} /> */}
            <Header title={product.title} briefDescription={product.briefDescription} price={product.salePrice} image={product.image} rating={product.rating} discount={35} />
            <div className={`single-product-page-description-container container ${showDescription === true && "show"}`}>
                <p className="description" ref={descriptionRef}></p>
                <button onClick={() => setShowDescription(curr => !curr)} className={'primary'}>Show More</button>
            </div>
            <SuggestedProducts category={product.category_id} />
            <Comments />
            <Footer />
        </>
    )
}

export default SingleProduct;