import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/customer.css";
import {  ArrowRightAltOutlined, Mail } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import LoadingScreen from "react-loading-screen";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerData() {
  
  const [cust, setCust] = useState([]);
  const [loading, setLoading] = useState(true);

  const param = useParams();
  var id = param.id;
  const data = cust.find((i) => i.id === id);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/anadahalli/interview/master/db.json"
      )
      .then((res) => {
        setCust(res.data.customers);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  var auth = localStorage.getItem("login");
  const navigate = useNavigate();
  if (auth === "false") {
    navigate("/");
  } else {
    if (loading === true) {
      <>
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          text="Please Wait"
        >
          <div>Loadable content</div>
        </LoadingScreen>
      </>;
    } else {
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
                  <h1>{data.firstName}</h1>
                  <h3>{data.lastName}</h3>
                </div>
                <div className="customer-email">
                  <div className="email-con">
                    <div className="email-head">
                      <h4>
                        <Mail sx={{ fontSize: "15px" }} />
                        Email
                      </h4>
                    </div>
                    <p>{data.email}</p>
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
                    <p>{data.orders}</p>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </>
      );
    }
  }
}

export default CustomerData;
