"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Navbar2 from "../../components/Navbar2.jsx";
import Footer from "@/components/Footer.jsx";
import SongCard from "../../components/ui/SongCard.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import { getCookie } from "cookies-next";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Page = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const token = getCookie("x-auth-token");
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded._id;

        const fetchSongs = async () => {
          try {
            const response = await axios.get(
              `http://localhost:4000/api/songs/like/${id}`
            );
            setLikedSongs(response.data.data);
          } catch (error) {
            console.error("Error fetching songs: ", error);
          }
        };

        fetchSongs();
      } else {
        window.location.href = "/";
      }
    }
  }, [isMounted]);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Sidebar />
      <div className="w-full h-full bg-black pl-72 mt-[3.6rem] overscroll-auto">
        <Navbar2 />
        <div>
          <div className="bg-black p-2 w-full h-auto overscroll-auto ">
            <hr className="my-10 bg-slate-500 h-1 " />
            <div className="p-2">
              <p className="text-white font-serif text-2xl font-semibold">
                Liked Songs
              </p>
              <div className="p-1 grid grid-cols-5 gap-x-1 gap-y-1">
                {likedSongs.map((song) => (
                  <div key={song._id} className="flex-shrink-0">
                    <SongCard songData={song} />
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
  );
};

export default Page;
