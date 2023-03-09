import Hero from './Sections/Hero';
import Navbar from './Sections/Navbar';
import Advantages from './Sections/Advantages';
import './index.css';
import Services from './Sections/Services';
import Featured from './Sections/Featured';
import CTA from './Sections/CTA';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className='bg-white max-w-[110rem] mx-auto'>
      <Navbar />
      <Hero />
      <Advantages />
      <Services />
      <Featured />  
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
