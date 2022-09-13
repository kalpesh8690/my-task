import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
} from "@mui/material";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import "../css/dash.css";

function Dashboard() {
  const [cust, setCust] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const selectUser = (c) => {
    navigate(`/dashboard/${c.id}`,{state:c});
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              <p className="dash-text">
                <span style={{ color: "blue" }}>Dash</span>board
              </p>
            </div>
            <div className="dash-data-main">
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 550 }}>
                  <Table aria-label="sticky table">
                    <TableHead sx={{ background: "rgb(39, 39, 39)" }}>
                      <TableRow>
                        <TableCell sx={{ color: "white" }}>Id</TableCell>
                        <TableCell sx={{ color: "white" }}>
                          Database ID
                        </TableCell>
                        <TableCell sx={{ color: "white" }}>Firstname</TableCell>
                        <TableCell sx={{ color: "white" }}>Lastname</TableCell>
                        <TableCell sx={{ color: "white" }}>Emails</TableCell>
                        <TableCell sx={{ color: "white" }}>Orders</TableCell>
                        <TableCell sx={{ color: "white" }}>Show User</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cust
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((d, index) => {
                          var idx=cust.indexOf(d);
                          return (
                            <TableRow key={index}>
                              <TableCell>{idx}</TableCell>
                              <TableCell>{d.id}</TableCell>
                              <TableCell>{d.firstName}</TableCell>
                              <TableCell>{d.lastName}</TableCell>
                              <TableCell>{d.email}</TableCell>
                              <TableCell>{d.orders}</TableCell>
                              <TableCell>
                                <Button
                                  onClick={() => selectUser(d)}
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
                <TablePagination
                  rowsPerPageOptions={[7,10,30,50]}
                  component="div"
                  count={cust.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Dashboard;
