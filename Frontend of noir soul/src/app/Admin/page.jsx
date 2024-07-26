"use client";
import * as React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
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
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const theme = createTheme();

const Admin = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verify = getCookie("x-auth-token");
    if (verify) {
      const decoded = jwtDecode(getCookie("x-auth-token"));
      // console.log(decoded);
      var isAdmin = decoded.isAdmin;
    }
    // console.log(verify, isAdmin);
    if (!verify || isAdmin === false) {
      alert("You need to be admin to access this page...");
      redirect("/");
    } else {
      setIsVerified(true);
    }
  }, []);
  const [songData, setSongData] = useState({
    name: "",
    artistName: "",
    artist: "",
    img: null,
    duration: "",
    song: null,
    songGenre: "",
  });

  const [artistData, setArtistData] = useState({
    name: "",
    genre: "",
    pfp: null,
  });
  const [artists, setArtists] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [searchSong, setSearchSong] = useState("");
  const [searchArtist, setSearchArtist] = useState("");
  const [deleteArtist, setDeleteArtist] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/artists");
        setArtists(response.data.data); // Assuming the response has an array of artists
        setLoading(false);
      } catch (error) {
        console.error("Error fetching artists:", error);
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  const handleSongChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const handleArtistChange = (event, value) => {
    if (value) {
      setSongData({
        ...songData,
        artist: value._id,
        artistName: value.name,
      });
    } else {
      setSongData({
        ...songData,
        artist: "",
        artistName: "",
      });
      setMessage("Create artist below");
    }
  };

  const handleSongImageChange = (e) => {
    setSongData({ ...songData, img: e.target.files[0] });
  };
  const handleSongAudioChange = (e) => {
    setSongData({ ...songData, song: e.target.files[0] });
  };
  const handleSongSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", songData.name);
    formData.append("artistName", songData.artistName);
    formData.append("artist", songData.artist);
    formData.append("img", songData.img);
    formData.append("duration", songData.duration);
    formData.append("song", songData.song);
    formData.append("genre", songData.songGenre);

    try {
      // console.log(data);

      const response = await axios.post(
        `http://localhost:4000/api/songs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      // console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
  };
  const handleArtistImageChange = (e) => {
    setArtistData({
      ...artistData,
      pfp: e.target.files[0],
    });
  };
  const handleArtistSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", artistData.name);
    formData.append("genre", artistData.genre);
    formData.append("img", artistData.pfp);

    try {
      const response = await axios.post(
        `http://localhost:4000/api/artists/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
  const handleDeleteSongs = async (songId) => {
    // console.log(`Delete ${songId}`);
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/songs/${songId}`,
        {
          headers: {
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      if (response.status == 200) {
        setSongs([]);
      }
    } catch (error) {
      console.error("Error deleting songs:", error);
    }
  };

  const handleSearchSongSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/search?search=${searchSong}`,
        {
          headers: {
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      if (response.data.songs) {
        setSongs(response.data.songs);
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };
  const handleSearchArtistSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/search?search=${searchArtist}`,
        {
          headers: {
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      // console.log(response.data.artists);
      if (response.data.artists) {
        setDeleteArtist(response.data.artists);
      }
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  const handleDeleteArtist = async (artistId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/artists/${artistId}`,
        {
          headers: {
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      if (response.status == 200) {
        setDeleteArtist([]);
      }
    } catch (error) {
      console.error("Error deleting songs:", error);
    }
  };
  {
    message && alert(message);
  }

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
              Admin Section
            </Typography>
            <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
              Features:
            </Typography>
            <ul>
              <li>See Users</li>
              <li>See Songs</li>
              <li>See Artists</li>
              <li>Upload Songs</li>
              <li>Upload Artists</li>
            </ul>
            <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
              Upload Song
            </Typography>
            <form onSubmit={handleSongSubmit} noValidate sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Song Name"
                name="name"
                autoComplete="name"
                value={songData.name}
                onChange={handleSongChange}
              />
              <Autocomplete
                options={artists}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Artist"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="artistName"
                    name="artistName"
                  />
                )}
                onChange={handleArtistChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="duration"
                label="Duration"
                name="duration"
                autoComplete="duration"
                value={songData.duration}
                onChange={handleSongChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="songGenre"
                label="Song Genre"
                name="songGenre"
                autoComplete="songGenre"
                value={songData.songGenre}
                onChange={handleSongChange}
              />
              <div className="my-5">
                <p className="my-2">Song Image:</p>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleSongImageChange}
                  required
                />
              </div>

              <div className="my-5">
                <p className="my-2">Song Audio:</p>
                <input
                  type="file"
                  id="song"
                  name="song"
                  accept="audio/*"
                  onChange={handleSongAudioChange}
                  required
                />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Upload Song
              </Button>
            </form>
            <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
              Upload Artist
            </Typography>
            <form onSubmit={handleArtistSubmit} noValidate sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Artist Name"
                name="name"
                autoComplete="name"
                value={artistData.name}
                onChange={(e) =>
                  setArtistData({ ...artistData, name: e.target.value })
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="genre"
                label="Genre"
                name="genre"
                autoComplete="genre"
                value={artistData.genre}
                onChange={(e) =>
                  setArtistData({ ...artistData, genre: e.target.value })
                }
              />

              <p className="my-1 mb-2 text-black">Profile image:</p>
              <input
                accept="image/*"
                type="file"
                onChange={handleArtistImageChange}
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Upload Artist
              </Button>
            </form>
            <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
              Delete Song
            </Typography>
            <form onSubmit={handleSearchSongSubmit} noValidate sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="delsong"
                label="Song"
                name="delsong"
                autoComplete="Song"
                value={searchSong}
                onChange={(e) => {
                  setSearchSong(e.target.value);
                  console.log(e.target.value);
                }}
              />
              {songs.length != 0 ? (
                <Container>
                  <Typography component="h2" variant="h6" sx={{ mt: 4, mb: 2 }}>
                    Song List
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Song Name</TableCell>
                          <TableCell>Artist Name</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {songs.map((song) => (
                          <TableRow key={song._id}>
                            <TableCell>{song.name}</TableCell>
                            <TableCell>{song.artistName}</TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleDeleteSongs(song._id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              ) : (
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ mt: 4, mb: 2 }}
                ></Typography>
              )}
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Search
              </Button>

              <Typography
                component="h2"
                variant="h6"
                sx={{ mt: 4 }}
              ></Typography>
            </form>
            <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
              Delete Artist
            </Typography>
            <form onSubmit={handleSearchArtistSubmit} noValidate sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Artist"
                label="Artist"
                name="delArtist"
                autoComplete="Song"
                value={searchArtist}
                onChange={(e) => {
                  setSearchArtist(e.target.value);
                  console.log(e.target.value);
                }}
              />
              {deleteArtist.length != 0 ? (
                <Container>
                  <Typography component="h2" variant="h6" sx={{ mt: 4, mb: 2 }}>
                    Artists List
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Artist Name</TableCell>
                          <TableCell>Artist Genre</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {deleteArtist.map((artist) => (
                          <TableRow key={artist._id}>
                            <TableCell>{artist.name}</TableCell>
                            <TableCell>{artist.genre}</TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleDeleteArtist(artist._id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              ) : (
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ mt: 4, mb: 2 }}
                ></Typography>
              )}
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Search
              </Button>

              {message && <Typography color="error">{message}</Typography>}
              <Typography
                component="h2"
                variant="h6"
                sx={{ mt: 4 }}
              ></Typography>
            </form>
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

export default Admin;
