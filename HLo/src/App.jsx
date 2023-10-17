import './style.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from './components/products/ProductList'
import Home from "./components/Home/home"
import withCategoryFilterHook from "./hooks/withCategoryFilterHook"
import ItenDetailContainer from "./components/ItemDetailContainer/ItenDetailContainer"

const WithCategoryProducts = withCategoryFilterHook(ProductList);

function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/category" element= {<WithCategoryProducts/> }/>
        <Route exact path="/products/:productId" element={<ItenDetailContainer/>}/>
      </Routes>
      <hola></hola>
    </Router>
  </>)
}

export default App
