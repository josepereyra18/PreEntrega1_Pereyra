import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./CartWidget.css"
import { Button, Typography } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useCartContext();
    return (
        <>
            {cart.items.length > 0 && (
                <Button component ={Link} to ={`/cart`}  style={{ fontFamily: 'Poppins', color:"white"}}>
                    <Typography>{cart.cantidad}</Typography>
                    <ShoppingCartOutlinedIcon />
                </Button>
            )}
        </>
    );
}

export default CartWidget;