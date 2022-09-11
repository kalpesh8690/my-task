import { Laptop } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AppBar,Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import "../css/nav.css";

function Header() {

    
    const navigate=useNavigate()
    const Logout=(()=>{
        localStorage.removeItem('login');
        localStorage.setItem('login',false);
        
        navigate('/')

    })
    var auths=localStorage.getItem('login');
    if(auths==='true'){
        return (
            <>
              <AppBar
                sx={{ display: "flex", background: "rgb(0, 0, 66)" }}
                position="fixed"
                className="nav-main"
              >
                <Toolbar>
                  <Laptop
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="laptop"
                    sx={{ mr: 2 }}
                  />
                  <Typography
                    sx={{ flexGrow: 1, textTransform: "uppercase", fontWeight: "bold" }}
                    variant="h5"
                    component="div"
                  >
                    Interview Task
                  </Typography>
                  <Button onClick={()=>Logout()} sx={{color:"inherit"}}>Logout</Button>
                </Toolbar>
              </AppBar>
            </>
          );
    }else{
        return (
            <>
              <AppBar
                sx={{ display: "flex", background: "rgb(0, 0, 66)" }}
                position="fixed"
                className="nav-main"
              >
                <Toolbar>
                  <Laptop
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="laptop"
                    sx={{ mr: 2 }}
                  />
                  <Typography
                    sx={{ flexGrow: 1, textTransform: "uppercase", fontWeight: "bold" }}
                    variant="h5"
                    component="div"
                  >
                    Interview Task
                  </Typography>
                </Toolbar>
              </AppBar>
            </>
          );
    }
  
}

export default Header;
