import Hero from './Sections/Hero';
import Navbar from './Sections/Navbar';
import Advantages from './Sections/Advantages';
import './index.css';
import Services from './Sections/Services';
import Featured from './Sections/Featured';

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Advantages />
      <Services />
      <Featured />  
    </div>
  );
}

export default App;
