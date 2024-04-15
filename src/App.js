import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Events from './Pages/Events'
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import Authentication from './Pages/Authentication';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/events" element={ <Events/> } />
          <Route path="/product" element={ <Product/> } >
            <Route path=':productId' element={<Product/> } />
          </Route>
          <Route path='/cart' element={<Cart/> } />
          <Route path='/authentication' element={<Authentication/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
