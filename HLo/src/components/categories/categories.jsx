import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categorias from "../../mocks/categorias.json"
import { Link } from "react-router-dom";

const Categories= ()=>{
    const{data,loading} = useAsyncMock(categorias)

    if (loading){
        return <CircularProgress/>
    }
    return( <div className="container">
        <Typography variant="h2" style={{color : "#8F8C8C"}}>
            Categorias
        </Typography>

        <div className="categories-container">
            {
                data.map((category)=>{
                    return(
                        <Card className="card-categories-container" key={category.id}>
                            <CardContent className="card-content-container" component={Link} to ={`/category/${category.categoria}`}>
                                <Typography>{category.categoria}</Typography>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    
    </div> );
}

export default Categories;