import { useParams } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import { CircularProgress, Typography } from "@mui/material";
import ProductDetail from "../products/ProductDetail";

const ItenDetailContainer= () =>{
    const {productId} = useParams()
    const {data, loading} = useAsyncMock(products)
    if (loading){
        return <CircularProgress/>
    }
    const productSelected = data.filter(producto => producto.id == productId);
    return(
            <div className="ItemDetailContainer">
                {productSelected.map((product)=>{
                    return <ProductDetail key={product.id} product={product}/>
                })}
            </div>

    )
} 
export default ItenDetailContainer;