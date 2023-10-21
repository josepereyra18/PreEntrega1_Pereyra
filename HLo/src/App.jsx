import './style.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from './components/products/ProductList'
import Home from "./components/Home/home"
import withCategoryFilterHook from "./hooks/withCategoryFilterHook"
import ItenDetailContainer from "./components/ItemDetailContainer/ItenDetailContainer"
import CartProvider from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'


const WithCategoryProducts = withCategoryFilterHook(ProductList);

function App() {
  return (
  <>
  <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/category" element= {<WithCategoryProducts/> }/>
        <Route exact path="/products/:productId" element={<ItenDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
    </Router>
  </CartProvider>
  </>)
}

export default App
