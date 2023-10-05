import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";

function withCategoryFilterHook(WrappedComponent) {
    return function WithCateforyFilter(props) {
        const [selectedCategory, setSelectedCategory] =useState("all")
        const handleSelectedCategory =(e) =>{
            setSelectedCategory(e.target.value)
        }
        return (
            <div className="mockFilter">
                <Typography className="categoriaProductos" variant="h2">
                    {selectedCategory === "all" ? "Todos los productos" : `Categoría: ${selectedCategory}`}
                </Typography>
                <FormControl>
                    <InputLabel>Filtrar por categoría</InputLabel>
                    <Select value={selectedCategory} onChange={handleSelectedCategory}>
                        <MenuItem value = "all">Todo</MenuItem>
                        <MenuItem value = "Camisas">Camisas</MenuItem>
                        <MenuItem value = "Pilotos">Pilotos</MenuItem>
                        <MenuItem value = "Zapatillas">Zapatillas</MenuItem>
                        <MenuItem value = "Accesorios Invierno">Accesorios Invierno</MenuItem>
                        <MenuItem value = "Pantalones">Pantalones</MenuItem>
                        <MenuItem value = "Abrigados">Abrigados</MenuItem>
                        <MenuItem value = "Remeras">Remeras</MenuItem>
                    </Select>
                </FormControl>
                <WrappedComponent selectedCategory={selectedCategory}/>
            </div>
        )
    }
}
export default withCategoryFilterHook;