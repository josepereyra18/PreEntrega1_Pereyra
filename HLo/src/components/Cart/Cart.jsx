import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Button,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, createTheme } from '@mui/material';
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart} = useCartContext()
    const total = cart.items.reduce((acc,item)=>acc+item.precio *item.quantity, 0)
    const theme = createTheme({
        typography: {fontFamily:'Poppins'}
    });
    return (
        <div className='Cart-content'>
            <Paper elevation={3}>
                <Typography theme={theme} variant='h6'component="div" align='center' sx={{p:2}}>
                    Cart
                </Typography >
                {cart.items.length ===0 ? (
                    <TableCell style={{display:"flex", justifyContent:'center', alignContent:'center'}}> 
                        <Typography theme={theme}>
                            El carrito esta vacio :(
                        </Typography>
                    </TableCell>) :
                    (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell  >
                                            <Typography theme={theme}>
                                                Imagen
                                            </Typography>
                                            
                                        </TableCell>
                                        <TableCell  >
                                            <Typography theme={theme}>
                                                Producto
                                            </Typography>
                                        </TableCell>
                                        <TableCell  >
                                            <Typography theme={theme}>
                                                Cantidad
                                            </Typography>
                                        </TableCell>
                                        <TableCell  >
                                            <Typography theme={theme}>
                                                Precio
                                            </Typography>
                                        </TableCell >
                                        <TableCell  >
                                            <Typography theme={theme}>
                                                Total
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.items.map((item)=>(
                                        <TableRow key={item.id}>
                                            <TableCell  >
                                                <img className="CartImg" src={item.img}/>
                                            </TableCell>
                                            <TableCell  >
                                                <Typography theme={theme}>
                                                    {item.nombre}
                                                </Typography>
                                            </TableCell>
                                            <TableCell  >
                                                <Typography theme={theme}>
                                                    {item.quantity} x
                                                </Typography>
                                            </TableCell>                                            
                                            <TableCell  >
                                                <Typography theme={theme}>
                                                    ${item.precio}
                                                </Typography>
                                            </TableCell>
                                            <TableCell  >
                                                <Typography theme={theme}>
                                                    ${item.precio * item.quantity}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                            <Typography theme={theme} style={{fontSize:'20px'}}>
                                                    Total: 
                                            </Typography>
                                        </TableCell>
                                        <TableCell  >
                                            <Typography theme={theme} style={{fontSize:'20px'}}>
                                                ${total.toFixed(2)}    
                                            </Typography>
                                            
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                    )
                }
                <Typography theme={theme} variant='h6'component="div" align='center' sx={{p:2, display:"flex", justifyContent:"space-around"}}>
                    <Button style={{color:"black"}} component={Link} to ={"/"}> Inicio </Button>
                    <Button style={{color:"black"}} component={Link} to ={"/checkout"}>Pagar</Button>
                </Typography >
            </Paper>
        </div>
    );
}

export default Cart;
