import { useParams } from "react-router-dom";
import ProductDetail from "../products/ProductDetail";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import ItemListPage from "./ItemListPage";

const ItenDetailContainer= () =>{
    const {productId} = useParams()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = parseInt(productId)
        const fetchData = async () => {
                const db = getFirestore();
                const productsRef = collection(db, 'productos');
                const q = query(productsRef, where('id', '==', id))
                const snapshot = await getDocs(q);
                const productData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(productData);
                setLoading(false);
        };
        fetchData();
    }, []);

    console.log(productId)
    if (loading) {
        return <CircularProgress />;
    }

    return(
            <div className="ItemDetailContainer">
                {products.map((product)=>{
                    return <ItemListPage product={product}/>
                })}
            </div>

    )
} 
export default ItenDetailContainer;
