"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import "../globals.css";
import Navbar2 from "../../components/Navbar2.jsx";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SongCard from "../../components/ui/SongCard.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import Footer from "@/components/Footer.jsx";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Link from "next/link";

const PageContent = () => {
  const searchParams = useSearchParams();
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [songDetails, setSongDetails] = useState(null);
  const [artistId, setArtistId] = useState("");
  const [relatedSongs, setRelatedSongs] = useState([]);
  const [isSongsLoaded, setIsSongsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const toogleBookmarked = () => {
    setIsBookmarked(!isBookmarked);
  };
  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  //get song by id
  const songId = searchParams.get("songId");
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/songs/${songId}`
        );
        setSongDetails(response.data.data);
        setArtistId(response.data.data.artist._id);
      } catch (error) {
        console.error("Error fetching song: ", error);
      }
    };
    const fetchSongsOfArtist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/artists/songs/${artistId}`
        );
        setRelatedSongs(response.data.data);
        setIsSongsLoaded(true);
      } catch (error) {
        console.error("Error fetching songs of artist: ", error);
      }
    };

    if (songId) {
      fetchSong();
    }
    if (artistId !== "") {
      fetchSongsOfArtist();
    }
  }, [songId, artistId]);

  const isSongLiked = async () => {
    try {
      const userId = jwtDecode(getCookie("x-auth-token"))._id;
      const response = await axios.get(
        `http://localhost:4000/api/users/${userId}`,
        {
          headers: {
            "x-auth-token": getCookie("x-auth-token"),
          },
        }
      );
      // Check if the songId is in the likedSongs array
      if (response.data.data.likedSongs.includes(songId)) {
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error fetching song like status", error);
    }
  };

  const likeSong = async () => {
    try {
      const userId = jwtDecode(getCookie("x-auth-token"))._id;
      // console.log(userId);
      if (userId && songId) {
        const response = await axios.post(
          `http://localhost:4000/api/users/${userId}/like/${songId}`,
          {},

          {
            headers: {
              "x-auth-token": getCookie("x-auth-token"),
            },
          }
        );
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error liking song: ", error);
      setMessage("Failed to like song");
    }
  };

  // console.log(songDetails);
  // console.log(relatedSongs);
  const songInfo = {
    name: songDetails?.name || "Song name...",
    artist: songDetails?.artistName || "Artist Name...",
    genre: songDetails?.genre || "Genre...",
    duration: songDetails?.duration || "Duration...",
    imageUrl: songDetails?.img
      ? `https://gateway.pinata.cloud/ipfs/${songDetails.img}`
      : "/logo.png",
    artistId: songDetails?.artist._id || null,
    songId: songDetails?._id || "",
  };
  // console.log(songDetails);

  return (
    <div>
      <Sidebar />
      <div className="w-full h-full bg-black pl-72 mt-[3.6rem] overscroll-auto min-h-screen">
        <Navbar2 />
        <div className="flex p-4 flex-row gap-10 items-center font-serif ">
          <div className="flex flex-col gap-2">
            <img
              src={songInfo.imageUrl}
              alt="artist pic"
              className="w-48 h-48 rounded-full object-cover shadow-lg cursor-pointer hover:opacity-[0.9]"
              onClick={toggleOverlay}
            />
            <div className="flex flex-row gap-2 items-center">
              {/* like starts */}
              {!isLiked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-white cursor-pointer"
                  onClick={likeSong}
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-white cursor-pointer"
                  onClick={likeSong}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              )}

              {/* like ends  */}

              {/* bookmark starts  */}
              {!isBookmarked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-white cursor-pointer"
                  onClick={toogleBookmarked}
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className=" text-white cursor-pointer"
                  onClick={toogleBookmarked}
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                </svg>
              )}

              {/* bookmark ends  */}

              {/* play button starts */}
              <IconButton
                aria-label="play/pause"
                sx={{
                  height: 30,
                  width: 30,
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  padding: 1,
                }}
              >
                <PlayArrowIcon />
              </IconButton>

              {/* play button ends  */}
            </div>
            {/* purchase starts  */}
            <Button
              variant="contained"
              color="error"
              className="mt-1 items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              PURCHASE
            </Button>
            {/* purchase ends  */}
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold">{songInfo.name}</h2>
            <Link
              href={{
                pathname: "/Artist",
                query: { artistId: songInfo.artistId },
              }}
              className="text-2xl no-underline text-white hover:underline"
            >
              Artist: {songInfo.artist}
            </Link>
            <p className="text-xl">{songInfo.genre}</p>
            <p className="mt-2">{songInfo.duration}</p>
          </div>
        </div>
        {message && (
          <p className="my-2 ml-6 text-red-500 font-serif text-md">{message}</p>
        )}
        <hr className="my-10 bg-slate-500 h-1 " />
        <div className="p-2">
          <p className="text-white font-serif text-2xl font-semibold">
            Related songs
          </p>
          <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar p-1">
            {isSongsLoaded ? (
              relatedSongs.map((song) => (
                <div key={song._id} className="flex-shrink-0">
                  <SongCard songData={song} />
                </div>
              ))
            ) : (
              <p>No songs available</p>
            )}
          </div>
        </div>

        {/* over lay image starts   */}
        {isOverlayOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className=" absolute top-[25%] right-[0%] mt-4 mr-4 text-red  cursor-pointer w-20 h-10"
                onClick={toggleOverlay}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
              <img
                src={songInfo.imageUrl}
                alt="artist pic"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        )}
        {/* over lay image ends  */}
        <Footer />
      </div>
      <MusicPlayer />
    </div>
  );
};
const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);
export default Page;
