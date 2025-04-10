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
    const [error, setError] = useState(null)
    const redirectState = JSON.parse(localStorage.getItem("redirectState") || "null")

    let state = location.state || redirectState;
    const getProductInfo = async () => {
        if (!state || !state.productId) {
            console.log("error with product state,", state)
            return;
        }
        console.log(state)
        const productDetails = await Request(`/product/${state?.productId}`, "GET", false)
        if (!productDetails.data) {
            setError(true)
            return
        }
        setProduct(productDetails.data)
        localStorage.removeItem("redirectState");

        console.log(productDetails.data)
    }

    useEffect(() => {
        getProductInfo();
    }, [])
    useEffect(() => {
        descriptionRef.current.innerHTML = product.description
    }, [product])
    return (
        <>
            {error ?
                <div className="container">
                    <h1>Product not found</h1>
                </div>
                : <>
                    <Header id={product._id} title={product.title} briefDescription={product.briefDescription} price={product.finalPrice} image={product.cloudinary_url} rating={product?.rating} discountPercentage={product?.discountPercentage} basePrice={product.basePrice} />
                    <div className={`single-product-page-description-container container ${showDescription === true && "show"}`}>
                        <p className="description" ref={descriptionRef}></p>
                        <button onClick={() => setShowDescription(curr => !curr)} className={'primary'}>Show More</button>
                    </div>
                    <SuggestedProducts category={product.category} id={product._id} />
                    <Comments productId={state?.productId} />
                </>}
        </>
    )
}

export default SingleProduct;