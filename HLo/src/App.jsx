import './style.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Categories from './components/categories/categories'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'


function App() {
  const greeting = "Binevenido/a !"
  return (
  <>
  <Router>
    <Navbar/>
    <ItemListContainer greeting = {greeting}/>

    <Routes>
      <Route exact path='/' element = {<Categories/>}/>
      <Route exact path="/products" element= {<ProductList/>}/>
      <Route exact path="/category/:categoryId" element={<CategoriesProductList/>}/>
      <Route exact path="/category/:categoryId/:productId" element={<ProductModal/>}/>
    </Routes>

  </Router>
    
  </>)
}

export default App
