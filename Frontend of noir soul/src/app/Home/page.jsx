"use client";
import { useLayoutEffect, useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import Navbar2 from "@/components/Navbar2.jsx";
import SongCard from "../../components/ui/SongCard.jsx";
import "../globals.css";
import Footer from "@/components/Footer.jsx";
import ArtistCard from "../../components/ui/ArtistCard.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Page = () => {
  //verify user logged in or not
  const [isVerified, setIsVerified] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  useLayoutEffect(() => {
    const verify = getCookie("x-auth-token");
    if (!verify) {
      alert("Please SignIn to access...");
      redirect("/");
    } else {
      setIsVerified(true);
    }
  }, []);

  //fetch logged in user
  useEffect(() => {
    const token = getCookie("x-auth-token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setLoggedInUserId(decoded._id);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("No token found in cookies");
    }
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/${loggedInUserId}`,
          {
            headers: {
              "x-auth-token": getCookie("x-auth-token"),
            },
          }
        );
        const userData = await response.data.data;

        setLoggedInUserData(userData);
        // console.log(loggedInUserData);
        setRecentlyPlayedSongs(userData.recentlyPlayedSongs || []);
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };
    if (loggedInUserId) {
      fetchUser();
    }
  }, [loggedInUserId]);

  //get songs
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/songs");

        setSongs(response.data.data);
      } catch (error) {
        console.error("Error fetching songs: ", error);
      }
    };
    fetchSongs();
  }, []);
  //get artists
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/artists");
        setArtists(response.data.data);
      } catch (error) {
        console.error("Error fetching artists: ", error);
      }
    };
    fetchArtists();
  }, []);
  // console.log(artists);

  //Show only 20 shuffled songs
  const shuffleSongsArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledSongs = shuffleSongsArray([...songs]).slice(0, 20);
  //Show only 10 shuffled artists
  const shuffleArtistArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const shuffledArtists = shuffleArtistArray([...artists]).slice(0, 10);
  return isVerified ? (
    <div>
      <Sidebar />
      <div className="w-full h-full bg-black pl-72 mt-[3.6rem] overscroll-auto">
        <Navbar2 />
        <div>
          <div className="bg-black p-2 w-full h-auto overscroll-auto ">
            <hr className="my-10 bg-slate-500 h-1 " />
            <div className="p-2">
              <p className="text-white font-serif text-2xl font-semibold">
                Songs for you
              </p>
              <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar p-1">
                {shuffledSongs.map((song) => (
                  <div key={song._id} className="flex-shrink-0">
                    <SongCard
                      songData={song}
                      onPlay={() => updateRecentlyPlayed(song._id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-10 bg-slate-500 h-1 " />

            <div className="p-2">
              <p className="text-white font-serif text-2xl font-semibold">
                Artists for you
              </p>
              <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar p-1">
                {shuffledArtists.map((artist) => (
                  <div key={artist._id} className="flex-shrink-0">
                    <ArtistCard artistData={artist} />
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-10 bg-slate-500 h-1 " />
          </div>
        </div>
        <Footer />
      </div>
      <MusicPlayer />
    </div>
  ) : (
    <div className="text-3xl mx-[50%] my-[50%] font-serif text-blue-500">
      Loading...
    </div>
  );
};

export default Page;
