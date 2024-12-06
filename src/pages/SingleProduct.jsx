import Footer from "../components/misc/footer/Footer"
import Header from "../components/Product/Header"
import testImage from './../assets/images/chips.png'
const SingleProduct = () => {
    return (
        <>
            <Header title="Grey Nike running sneakers testing to see if the font will fit 2 lines" description="this is a description for the product this is a description for the product this is a description for the product this is a description for the product this is a description for the product this is a description for the product this is a description for the product " price={50} image={testImage} rating={3.3} discount={35}/>
            <Footer />
        </>
    )
}

export default SingleProduct;