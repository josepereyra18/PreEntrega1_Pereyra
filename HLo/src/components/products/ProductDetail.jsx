import {Button, Card, CardContent, Grid, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modalinfo from "../ModalItem/ModalProduct"

const ProductDetail= ({product})=>{
    const theme = createTheme({
        typography: {fontFamily:'Poppins'}
    });
    const {id,img, nombre, precio} = product
    const[isSelected, setSelected]=useState(false)

    const handleClick=()=>{
        setSelected((prev) => !prev)
    }
    const onHandle=()=>{
        {console.log(product.id)}
    }
    return ( 
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container">
                <img className="card-product-img" src={img}/>
                <CardContent className="card-cardContent-container">
                    <Typography theme={theme}>{nombre}</Typography>
                    <Typography theme={theme} variant="h6" style={{color : "#8F8C8C"}}>$ {precio.toFixed(2)}</Typography>
                    <div className="ProductDetail-Agregar-Modal">
                        <Button theme={theme} style={{color:"black"}} onClick={handleClick} variant="1">Agregar</Button>
                        <Button theme={theme} style={{color:"black"}} component={Link} to ={`/products/${id}`} variant="3" onClick={onHandle}>Ver</Button>
                    </div>
                    
                </CardContent>
            </Card>
        </Grid>
        {
            isSelected &&
            <Modalinfo product={product} open={isSelected} setOpen ={setSelected}/>
        }
        </>
    );
}

export default ProductDetail;
