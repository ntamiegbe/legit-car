import Hero from './Sections/Hero';
import Navbar from './Sections/Navbar';
import Advantages from './Sections/Advantages';
import './index.css';

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Advantages />
    </div>
  );
}

export default App;
