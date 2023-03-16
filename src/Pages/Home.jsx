import Navbar from "../Sections/Navbar"
import Hero from "../Sections/Hero"
import Advantages from "../Sections/Advantages"
import Services from "../Sections/Services"
import Featured from "../Sections/Featured"
import CTA from "../Sections/CTA"
import Footer from "../Sections/Footer"

const Home = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <Hero />
            <Advantages />
            <Services />
            <Featured />
            <CTA />
            <Footer />
        </div>
    )
}

export default Home