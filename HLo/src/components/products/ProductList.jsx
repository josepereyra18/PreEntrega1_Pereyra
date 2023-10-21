import { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { addDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore'; // Importa los elementos necesarios de Firebase
import ProductDetail from '../products/ProductDetail';

const ProductList = (props) => {
    const { selectedCategory } = props;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
                const db = getFirestore();
                const productsRef = collection(db, 'productos');
                const q = selectedCategory !== 'all'
                    ? query(productsRef, where('categoria', '==', selectedCategory))
                    : productsRef;

                const snapshot = await getDocs(q);
                const productData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                setProducts(productData);
                setLoading(false);
        };

        fetchData();
    }, [selectedCategory]);
    console.log(products)
    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div className="productos">
            <Grid container spacing={4} className="container">
                {products.map((product) => (
                    <ProductDetail key={product.id} product={product} />
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;