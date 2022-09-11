import React, { useState } from "react";
import { Box, Button, Input} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/login.css";
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const LoginUser = () => {
    if(username==='user'&& password==='password'){
      navigate('/dashboard')
      localStorage.setItem('login',true);
    }else{
        toast.error('Please enter valid username and password')
        localStorage.setItem('login',false)
    }
  };
  return (
    <>
      <div className="login-main">
        <div className="login-vector">
          <img className="login-vector-img" alt="login-vector-img" src="./4957136.png"></img>
        </div>
        <div className="login-form-main">
          <Box className="login-form-box">
            <div className="login-form-logintext">
              <h1 className="logintext-head">Login</h1>
            </div>
            <div className="login-form-textfield">
              
              <Input
                className="login-input"
                required
                type="text"
                placeholder="Username"
                autoFocus='true'
                
                onChange={(e) => setUsername(e.target.value)}
              />
              
              <Input
                className="login-input"
                required
                type="password"
                label="Password"
                placeholder="Password"
                variant="true"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-form-btn">
              <Button
                onClick={() => LoginUser()}
                sx={{ border: "2px solid blue", color: "blue" }}
                className="login-btn"
                variant="undefined"
              >
                Login
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
