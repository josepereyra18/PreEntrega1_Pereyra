import {CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import ProductDetail from "./ProductDetail";
const ProductList= (props)=>{

    const {selectedCategory} =props;

    const filteredProducts=products.filter((product)=>{
        return selectedCategory ==="all" || product.categoria === selectedCategory
    })

    const {loading} = useAsyncMock(products)

    if (loading){
        return <CircularProgress/>
    }

    return ( 
        <div className="productos">
            <Typography variant="h2" style={{color :"#8F8C8C", paddingTop:"30px"}}>
            </Typography>
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