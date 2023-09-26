import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Categories from './components/categories/categories'

function App() {
  const greeting = "Binevenido/a !"
  return (
  <>
    <Navbar/>
    <ItemListContainer greeting = {greeting}/>
    <Categories/>
  </>)
}

export default App
