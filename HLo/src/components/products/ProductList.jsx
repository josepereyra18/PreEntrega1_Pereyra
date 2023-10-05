
import {CircularProgress, Grid} from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import ProductDetail from "../products/ProductDetail";

const ProductList= (props)=>{

    const {selectedCategory} =props;
    const filteredProducts = selectedCategory !== 'all' ? products.filter((product) => product.categoria === selectedCategory): products;

    const {loading} = useAsyncMock(products)

    if (loading){
        return <CircularProgress/>
    }

    return (
        <div className="productos">
            <Grid container spacing={4} className="container">
                {
                    filteredProducts.map((product)=>{
                        return(
                            <ProductDetail key={product.id} product={product}/>
                        )
                    })
                }
            </Grid>
        </div>
    );
}
export default ProductList;
