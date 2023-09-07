
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { AppBar, Button, Toolbar, Typography, makeStyles } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar sx={{position:"fixed", background:"#212529"}}>
            <Toolbar sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                
                <Typography variant="h4" sx={{ color: "aliceblue", fontFamily:'Poppins'}}>
                    HLo
                </Typography>

                <div style={{width: "25%",display:"flex" ,justifyContent:"space-around" }}>
                    <Button variant="outlined" href="#" sx={{ borderRadius: "50px",color: "aliceblue",fontFamily:'Poppins'}}>
                        Home
                    </Button>
                    <Button variant="outlined" href="#" sx={{ borderRadius: "50px",color: "aliceblue",fontFamily:'Poppins' }}>
                        About
                    </Button>
                    <Button variant="outlined" href="#" sx={{ borderRadius: "50px",color: "aliceblue",fontFamily:'Poppins' }}>
                        Contact
                    </Button>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <CartWidget/>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
