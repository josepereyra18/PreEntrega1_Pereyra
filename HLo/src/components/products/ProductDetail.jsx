import {Button, Card, CardContent, Grid, Typography } from "@mui/material";

const ProductDetail= ({product})=>{
    const {img, nombre, precio} = product
    return ( 
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card component={Button} className="card-products-container">
                <img className="card-product-img" src={img}/>
                <CardContent className="card-cardContent-container">
                    <Typography style={{color : "#8F8C8C"}}>{nombre}</Typography>
                    <Typography variant="h6" style={{color : "#8F8C8C"}}>$ {precio.toFixed(2)}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ProductDetail;
