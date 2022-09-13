import { Box } from "@mui/material";
import React,{useEffect} from "react";
import "../css/customer.css";
import {  ArrowRightAltOutlined, Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CustomerData() {
  
  const {state} = useLocation();
  var auth = localStorage.getItem("login");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (auth === "false") {
    navigate("/");
  }
     else {
      return (
        <>
          <div className="custdata-main">
            <div className="customer-img-main">
              <img className="customer-img" alt="customer-img" src="/1.png"></img>
            </div>
            <div className="custdata-box">
              <Box >
                <div className="cust-info">
                  <h1 className="cust-info-text">Customer Info</h1>
                </div>
                <div className="customers-img">
                  <img className="c-img" alt="customer-logo" src="/01.png"></img>
                </div>
                <div className="customer-name">
                  <h1>{state.firstName}</h1>
                  <h3>{state.lastName}</h3>
                </div>
                <div className="customer-email">
                  <div className="email-con">
                    <div className="email-head">
                      <h4>
                        <Mail sx={{ fontSize: "15px" }} />
                        Email
                      </h4>
                    </div>
                    <p>{state.email}</p>
                  </div>
                </div>
                <div className="customer-orders">
                  <div className="order-con">
                    <div className="order-head">
                      <h4>
                        <ArrowRightAltOutlined sx={{ fontSize: "15px" }} />
                        Total Orders
                      </h4>
                    </div>
                    <p>{state.orders}</p>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </>
      );
    }
  }


export default CustomerData;
