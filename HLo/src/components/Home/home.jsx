import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ProductList from '../products/ProductList';
import { useState } from 'react';


const Home= ()=>{
    const [selectedCategory, setSelectedCategory] = useState('all');
    const greeting = "Binevenido/a !"
    return (
        <div>
            <ItemListContainer greeting={greeting} />
            <ProductList selectedCategory={selectedCategory} />
        </div>
        
    );
}
export default Home;
