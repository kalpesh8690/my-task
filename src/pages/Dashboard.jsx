import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import {Paper} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import '../css/dash.css'

function Dashboard() {
  const [cust, setCust] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectUser = (id) => {
    navigate(`/dashboard/${id}`);
  };
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
      return (
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
        </>
      );
    } else {
      return (
        <>
          <div className="dash-main">
            <div className="dash-head-text">
              <p className="dash-text"><span style={{color:"blue"}}>Dash</span>board</p>
            </div>
            <div className="dash-data-main">
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 550 }}>
                <Table aria-label="sticky table">
                  <TableHead  sx={{background:"rgb(39, 39, 39)"}}>
                    <TableRow>
                      <TableCell sx={{color:"white"}}>Id</TableCell>
                      <TableCell sx={{color:"white"}} >Database ID</TableCell>
                      <TableCell sx={{color:"white"}}>Firstname</TableCell>
                      <TableCell sx={{color:"white"}}>Lastname</TableCell>
                      <TableCell sx={{color:"white"}}>Emails</TableCell>
                      <TableCell sx={{color:"white"}}>Orders</TableCell>
                      <TableCell sx={{color:"white"}}>Show User</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cust.map((d, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index}</TableCell>
                          <TableCell>{d.id}</TableCell>
                          <TableCell>{d.firstName}</TableCell>
                          <TableCell>{d.lastName}</TableCell>
                          <TableCell>{d.email}</TableCell>
                          <TableCell>{d.orders}</TableCell>
                          <TableCell>
                            <Button
                              onClick={() => selectUser(d.id)}
                              variant="outlined"
                            >
                              Show
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              </Paper>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Dashboard;
