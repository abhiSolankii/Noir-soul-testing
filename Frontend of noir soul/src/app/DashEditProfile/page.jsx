"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";
import Sidebar from "../../components/Sidebar2/sidebar2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb74d", // yellow-400
    },
  },
});

const Page = () => {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
    gender: "",
  });
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  var userid = "";

  useEffect(() => {
    const verify = getCookie("x-auth-token");
    if (verify) {
      const decoded = jwtDecode(getCookie("x-auth-token"));
      var isAdmin = decoded.isAdmin;
      userid = decoded._id;
    }

    if (verify || isAdmin === false) {
      setIsVerified(true);
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/${userid}`,
          {
            headers: {
              "x-auth-token": getCookie("x-auth-token"),
            },
          }
        );
        const userData = response.data.data;
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      gender: userData.gender,
    };

    try {
      const decoded = jwtDecode(getCookie("x-auth-token"));
      const response = await axios.put(
        `http://localhost:4000/api/users/${decoded._id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
  };

  return isVerified ? (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h4" color="#ffb74d">
                Edit Profile Section
              </Typography>

              <form noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="UserName"
                  name="username"
                  autoComplete="username"
                  value={userData.username}
                  onChange={handleProfileChange}
                  InputLabelProps={{ style: { color: "yellow" } }}
                  InputProps={{
                    style: {
                      color: "white",
                      borderColor: "#ffb74d", // yellow-400
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={userData.name}
                  onChange={handleProfileChange}
                  InputLabelProps={{ style: { color: "yellow" } }}
                  InputProps={{
                    style: {
                      color: "white",
                      borderColor: "#ffb74d", // yellow-400
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={handleProfileChange}
                  InputLabelProps={{ style: { color: "yellow" } }}
                  InputProps={{
                    style: {
                      color: "white",
                      borderColor: "#ffb74d", // yellow-400
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  autoComplete="gender"
                  value={userData.gender}
                  onChange={handleProfileChange}
                  InputLabelProps={{ style: { color: "yellow" } }}
                  InputProps={{
                    style: {
                      color: "white",
                      borderColor: "#ffb74d", // yellow-400
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#ffb74d",
                    color: "black",
                  }}
                >
                  Update Profile
                </Button>
              </form>
              {message && <Typography color="error">{message}</Typography>}
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  ) : (
    <div className="text-3xl mx-[50%] my-[50%] font-serif text-yellow-400">
      Loading...
    </div>
  );
};

export default Page;
