import {Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductDetail= ({product})=>{
    const {id,img, nombre, precio} = product
    return ( 
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card component={Link} to ={`/products/${id}`} className="card-products-container">
                <img className="card-product-img" src={img}/>
                <CardContent className="card-cardContent-container">
                    <Typography style={{color : "#8F8C8C"}}>{nombre}</Typography>
                    <Typography variant="h6" style={{color : "#8F8C8C"}}>$ {precio.toFixed(2)}</Typography>
                    <div className="ProductDetail-Agregar-Modal">
                        <Button variant="1">Agregar</Button>
                        <Button variant="3">Ver</Button>
                    </div>
                    
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ProductDetail;
