import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ProductList from '../products/ProductList';
import { useState } from 'react';
import products from "../../mocks/products.json"


const Home= ()=>{
    const [selectedCategory, setSelectedCategory] = useState('all');
    const greeting = "Binevenido/a !"
    return (
        <div>
            <ItemListContainer greeting={greeting} />
            <ProductList selectedCategory={selectedCategory} products={products} />
        </div>
        
    );
}
export default Home;
