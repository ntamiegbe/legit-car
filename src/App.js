import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Contact from './Pages/Contact';
import Maintainance from './Pages/Maintainance';
import MaintainanceDetails from './Pages/MaintainanceDetails';
import MaintainancePlans from './Pages/MaintainancePlans';
// import About from './Pages/About';
// import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Maintainance />} />
        <Route exact path="/MaintainancePlans" element={<MaintainancePlans />} />
        <Route exact path="/maintainanceDetails" element={<MaintainanceDetails />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
