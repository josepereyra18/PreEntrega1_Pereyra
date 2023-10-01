import { Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Typography variant="h3" style={{color : "#212529",marginTop: "80px", textAlign:"center"}}>
                {greeting}
            </Typography>
        </>
    );
}

export default ItemListContainer;
