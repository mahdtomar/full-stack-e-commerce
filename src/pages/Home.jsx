import Header from "../components/home/Header"
import Cetegories from "../components/home/Cetegories"
import TopDeals from "../components/home/TopDeals"
import WhyChooseUs from "../components/home/WhyChooseUs"
import Testmonials from "../components/home/Testmonials"
import Footer from "../components/misc/footer/Footer"
import Navbar from '../components/misc/navbar/Navbar'
const Home = () => {
    return (
        <>
            <Header />
            <Cetegories />
            <TopDeals />
            <WhyChooseUs />
            <Testmonials />
        </>
    )
}

export default Home