import './style.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'
import Home from "./components/Home/home"
import withCategoryFilterHook from "./hooks/withCategoryFilterHook"

const WithCategoryProducts = withCategoryFilterHook(ProductList);

function App() {
  
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/products" element= {<ProductList/>}/>
        <Route exact path="/category/:categoryId" element={<CategoriesProductList/>}/>
      </Routes>
      <WithCategoryProducts/>
    </Router>
    
  </>)
}

export default App
