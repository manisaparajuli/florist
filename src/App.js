import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {  Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Events from './Pages/Events'
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import Authentication from './Pages/Authentication';
import Footer from  './Components/Footer/Footer'
import NoMatch from './Pages/NoMatch';
import Login from './Pages/Login';
import ViewItem from './Components/ViewItem/ViewItem';
import { ShopContextProvider } from './Context/shop-contex';



function App() {
  return (
    <>
      <ShopContextProvider>
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/events" element={ <Events/> } />
            <Route exact path="/product" element={ <Product/> } />
            <Route path='product/:productId' element={<ViewItem/> } />
            <Route path='/cart' element={<Cart/> } />
            <Route path='/authentication' element={<Authentication/> } />
            <Route path='/login' element={<Login/> } />
            <Route path='*' element={<NoMatch/> } />
          </Routes>
        <Footer/>
      </ShopContextProvider>
    </>
  );
}

export default App;
