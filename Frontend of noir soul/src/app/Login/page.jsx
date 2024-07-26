"use client";
import * as React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { setCookie } from "cookies-next";
// Material-UI imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";

const theme = createTheme();

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [res, setRes] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/api/auth/login`,
        formData
      );
      //storing token in local storage
      // localStorage.setItem("x-auth-token", JSON.stringify(response.data.data));

      //storing token in cookies
      const decoded = await jwtDecode(response.data.data);
      setCookie("x-auth-token", response.data.data, {
        expires: new Date(decoded.exp * 1000),
      });

      setMessage(response.data.message);
      if (response.status === 200) {
        setMessage("Logging in please wait ...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000); // Redirect user to home page after 2 seconds
      }
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
  };

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            backgroundImage:
              "url(https://media.istockphoto.com/id/1130968781/vector/elegant-light-and-shine-vector-gold-blurred-gradient-style-background-texture-abstract-metal.jpg?s=612x612&w=0&k=20&c=S0h1mnW4K05RhgsIXxROyt_6T8kIVqMabUYYUTWj2wY=)", // Replace with your background image path
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          <CssBaseline />
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f5f5dc",
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form
                onSubmit={handleSubmit}
                noValidate
                sx={{ width: "100%", mt: 3 }}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={formData.username}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
              {message && <Typography color="error">{message}</Typography>}
            </Box>
          </Container>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default Page;
