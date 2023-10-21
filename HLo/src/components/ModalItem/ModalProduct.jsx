import {CircularProgress, Modal, Typography, createTheme } from "@mui/material"
import ItemCount from "../common/ItemCount"
import useAsyncMock from "../../hooks/useAsyncMock"
import { useCartContext } from "../../context/CartContext"

const ModalProduct = ({ product, open, setOpen }) => {
    const {loading} = useAsyncMock(product)

    if (loading){
        return <CircularProgress/>
    }
    const { img, nombre, precio, quantity } = product
    const theme = createTheme({
        typography: {fontFamily:'Poppins'}
    });

    const handleEliminar=()=>{
        const itemToAdd = {
            ...product,
            quantity: cantidad,
        };
        EliminarItem();
        setCantidad(1);
    }
    const handleClose = () => {
        setOpen(prev => !prev)
    }
    return (
        <>
            <Modal className="Modal-detail" open={open} onClose={handleClose}>
                <div className="Modal-Content">
                    <div className="Modal-Img">
                        <img className="Modal-Img" src={img} />
                    </div>
                    <div className="Modal-Info">
                        <Typography theme={theme} >{nombre}</Typography>
                        <Typography theme={theme} variant="h6" style={{ color: "#8F8C8C", fontSize:"20px"}} >$ {precio.toFixed(2)}</Typography>
                        <ItemCount product={product}/>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalProduct;