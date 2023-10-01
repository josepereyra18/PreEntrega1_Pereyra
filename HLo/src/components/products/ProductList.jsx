import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import ProductDetail from "./ProductDetail";
const ProductList= ()=>{
    const {data, loading} = useAsyncMock(products)

    if (loading){
        return <CircularProgress/>
    }

    return ( 
        <div className="productos">
            <Typography variant="h2" style={{color :"#8F8C8C"}}>
                Productos
            </Typography>
            <Grid container spacing={4} className="container">
                {
                    data.map((product)=>{
                        return(
                            <ProductDetail key={product.id} product={product}>
                            </ProductDetail>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default ProductList;