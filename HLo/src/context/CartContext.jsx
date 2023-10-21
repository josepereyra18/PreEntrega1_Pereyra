import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext =() =>useContext(CartContext)

const  CartProvider= ({children}) => {
    const [cart, setCart] = useState({ items: [], total: 0 , cantidad:0});

    const AgregarItem = (product) => {
        const existingItemIndex = cart.items.findIndex((item) => item.id === product.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart.items];
            updatedCart[existingItemIndex].quantity += product.quantity;

            setCart((prevCart) => ({
                ...prevCart,
                items: updatedCart,
                total: prevCart.total + product.price * product.quantity,
                cantidad:prevCart.cantidad+ product.quantity
            }));
        } else {
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity,
                cantidad:prevCart.cantidad+ product.quantity
            }));
        }
    };

    const EliminarItem = (productId) => {
        const updatedCart = cart.items.filter((item) => item.id !== productId);
        const removedItem = cart.items.find((item) => item.id === productId);
    
        if (removedItem) {
            setCart((prevCart) => ({
            ...prevCart,
            items: updatedCart,
            total: prevCart.total - removedItem.price * removedItem.quantity,
            cantidad: prevCart.cantidad - removedItem.quantity,
            }));
        }
    };


    return (
        <CartContext.Provider value={{ cart, AgregarItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;