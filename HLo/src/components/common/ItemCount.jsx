import React, { useContext, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Button, createTheme } from '@mui/material';

const ItemCount = ({ product }) => {
  const theme = createTheme({
    typography: {fontFamily:'Poppins'}
  });
  const { AgregarItem } = useCartContext()
  const [cantidad, setCantidad] = useState(1)
  const handleClickMas = () => {
      if(cantidad>=10){
            setCantidad(10)
        }else{
            setCantidad(cantidad + 1)
        }
        
  }
    const handleClickMenos = () => {
        if (cantidad <= 1) {
            setCantidad(1)
        } else {
            setCantidad(cantidad - 1)
        }
  }

  const addToCart = () => {
    const itemToAdd = {
      ...product,
      quantity: cantidad,
    };
    AgregarItem(itemToAdd);
    setCantidad(1);
  };

  return (
    <div>
      <div className="agregarDisminuir">
        <Button theme={theme} style={{color:"black"}} onClick={handleClickMenos}>-</Button>
        <span>{cantidad}</span>
        <Button theme={theme} style={{color:"black"}} onClick={handleClickMas}>+</Button>
      </div>
      <Button theme={theme} variant="1" onClick={addToCart}>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;