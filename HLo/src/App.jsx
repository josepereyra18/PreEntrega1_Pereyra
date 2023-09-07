import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const greeting = "Binevenido/a !"
  return (
  <>
    <Navbar/>
    <ItemListContainer greeting = {greeting}/>
  </>)
}

export default App
