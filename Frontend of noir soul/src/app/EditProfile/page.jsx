"use client";
import * as React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";

const theme = createTheme();

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
    // console.log(userid);
    // console.log(verify);
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
            // "x-auth-token": JSON.parse(localStorage.getItem("x-auth-token")),
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      // console.log(response.data.data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
  };

  return isVerified ? (
    <div>
      <Navbar />
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
            <Typography component="h1" variant="h4">
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
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                value={userData.name}
                onChange={handleProfileChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                value={userData.email}
                // onChange={handleSongChange}
                onChange={handleProfileChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="gender"
                label="gender"
                name="gender"
                autoComplete="gender"
                value={userData.gender}
                // onChange={handleSongChange}
                onChange={handleProfileChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Profile
              </Button>
            </form>
            {message && <Typography color="error">{message}</Typography>}
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  ) : (
    <div className="text-3xl mx-[50%] my-[50%] font-serif text-blue-500">
      Loading...
    </div>
  );
};

export default Page;
