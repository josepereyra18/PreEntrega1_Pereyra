import {Button, CardContent, CircularProgress, Paper, Typography, createTheme } from "@mui/material";
import {useState } from "react";
import Modalinfo from "../ModalItem/ModalProduct"
import ItemCount from "../common/ItemCount";
import { Link } from "react-router-dom";

const ItemListPage= ({product})=>{
    const theme = createTheme({
        typography: {fontFamily:'Poppins'}
    });
    const {id,img, nombre, precio, descripcion} = product
    const[isSelected, setSelected]=useState(false)

    return ( 
        <>
            <Paper className="Page-Content">
                <img className="Page-container" src={img}/>
                <CardContent className="Page-container-detail">
                    <Typography theme={theme} style={{fontSize:"40px"}}>{nombre}</Typography>
                    <Typography theme={theme} variant="h6" style={{color : "#8F8C8C", fontSize:"15px"}}>{descripcion}</Typography>
                    <Typography theme={theme} variant="h6" style={{color : "#8F8C8C"}}>$ {precio.toFixed(2)}</Typography>
                    <div className="">
                        <ItemCount product={product}/>
                        <Typography theme={theme} variant='h6'component="div" align='center' sx={{p:2}}>
                            <Button style={{color:"black"}} component={Link} to ={"/"}> Inicio </Button>
                        </Typography >
                    </div>
                    
                </CardContent>
            </Paper>
        {
            isSelected &&
            <Modalinfo product={product} open={isSelected} setOpen ={setSelected}/>
        }
        </>
    );
}

export default ItemListPage;
