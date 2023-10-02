
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { AppBar,Button,Toolbar, Typography} from '@mui/material';

const Navbar = () => {
    return (
        <AppBar sx={{position:"fixed", background:"#212529"}}>
            <Toolbar sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Typography variant="h4" sx={{ color: "aliceblue", fontFamily:'Poppins'}}>
                    HLo
                </Typography>
                <NavLink className="navbar-link" to ="/">
                    <Button variant="outlined" href="#" sx={{ borderRadius: "50px",color: "aliceblue",fontFamily:'Poppins'}}>
                        Home
                    </Button>
                </NavLink>
                <NavLink className="navbar-link" to ="/products">
                    <Button variant="outlined" href="#" sx={{borderRadius: "50px",color: "aliceblue",fontFamily:'Poppins'}}>
                        Productos
                    </Button>
                </NavLink>
                <div style={{display:"flex", alignItems:"center"}}>
                    <CartWidget/>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
