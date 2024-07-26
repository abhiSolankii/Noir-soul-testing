"use client";
import React, { useState, useEffect, Suspense, useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";
import "../globals.css";
import Navbar2 from "../../components/Navbar2.jsx";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import Footer from "@/components/Footer.jsx";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { redirect } from "next/navigation";
const PageContent = () => {
  const [isVerified, setIsVerified] = useState(false);
  useLayoutEffect(() => {
    const verify = getCookie("x-auth-token");
    if (!verify) {
      alert("Please SignIn to access...");
      redirect("/");
    } else {
      setIsVerified(true);
    }
  }, []);
  const searchParams = useSearchParams();
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [artistDetails, setArtistDetails] = useState(null);
  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };
  const artistId = searchParams.get("artistId");
  //find artist by id
  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/artists/${artistId}`,
          {
            headers: {
              "x-auth-token": getCookie("x-auth-token"),
            },
          }
        );
        setArtistDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching artist: ", error);
      }
    };
    if (artistId) {
      fetchArtist();
    }
  }, [artistId]);
  // console.log(artistDetails);

  const artistInfo = {
    name: artistDetails?.name || "Artist Name",
    genre: artistDetails?.genre || "Genre",
    bio: "This is a short bio about the artist.",

    imageUrl:
      `https://gateway.pinata.cloud/ipfs/${artistDetails?.img}` || "/logo.png",
    songs: artistDetails?.songs || ["Loading ...", "Loading ...", "Loading..."],
  };

  return isVerified ? (
    <div>
      <Sidebar />
      <div className="w-full h-full bg-black pl-72 mt-[3.6rem] overscroll-auto min-h-screen">
        <Navbar2 />
        <div className="flex p-4 flex-row gap-10 items-center font-serif ">
          <img
            src={artistInfo.imageUrl}
            alt="artist pic"
            className="w-48 h-48 rounded-full object-cover shadow-lg cursor-pointer hover:opacity-[0.9] "
            onClick={toggleOverlay}
          />
          <div className="text-white">
            <h2 className="text-4xl font-bold">{artistInfo.name}</h2>
            <p className="text-2xl">{artistInfo.genre}</p>
            <p className=" text-xl">
              Songs released : {artistInfo.songs.length}
            </p>
            <p className="mt-2">{artistInfo.bio}</p>
          </div>
        </div>
        <hr className="my-10 bg-slate-500 h-1 " />{" "}
        {isOverlayOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className=" absolute top-[25%] right-[0%] mt-4 mr-4  cursor-pointer w-20 h-10 text-red-600"
                onClick={toggleOverlay}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
              <img
                src={artistInfo.imageUrl}
                alt="artist pic"
                className="max-w-full max-h-full z-1"
              />
            </div>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl text-white mb-4 font-serif">Songs</h3>
          <ul className="text-white">
            {artistInfo.songs.map((song, index) => (
              <li
                key={index}
                className="flex flex-row gap-6 p-2 hover:opacity-80 hover:border hover:border-slate-800 cursor-pointer relative"
              >
                <p className="my-auto">{index + 1}</p>
                <img
                  src={`https://gateway.pinata.cloud/ipfs/${song.img}`}
                  alt="song poster"
                  className="h-12 w-12 object-cover rounded-sm"
                />
                <Link
                  href={{
                    pathname: "/Song",
                    query: { songId: song._id },
                  }}
                  className="my-auto no-underline hover:underline text-white"
                >
                  {song.name}
                </Link>

                <IconButton
                  aria-label="play/pause"
                  sx={{
                    position: "absolute",
                    bottom: "30%",
                    right: 4,
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
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
      <MusicPlayer />
    </div>
  ) : (
    <div>Please login</div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);
export default Page;
