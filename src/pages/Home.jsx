import Header from "../components/home/Header"
import Cetegories from "../components/home/Cetegories"
import TopDeals from "../components/home/TopDeals"
import WhyChooseUs from "../components/home/WhyChooseUs"
import Testmonials from "../components/home/Testmonials"
import Footer from "../components/misc/footer/Footer"

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Cetegories />
            <TopDeals />
            <WhyChooseUs />
            <Testmonials />
            <Footer />
        </>
    )
}

export default Home