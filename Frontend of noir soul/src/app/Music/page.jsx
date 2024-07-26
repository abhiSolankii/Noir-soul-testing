"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Navbar2 from "../../components/Navbar2.jsx";
import Footer from "@/components/Footer.jsx";
import SongCard from "../../components/ui/SongCard.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import axios from "axios";

const Page = () => {
  const [songs, setSongs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  //get songs
  useEffect(() => {
    if (isMounted) {
      const fetchSongs = async () => {
        try {
          const response = await axios.get("http://localhost:4000/api/songs");
          setSongs(response.data.data);
        } catch (error) {
          console.error("Error fetching songs: ", error);
        }
      };
      fetchSongs();
    }
  }, [isMounted]);
  if (!isMounted) {
    return <div>Loading...</div>;
  }
  const shuffleSongsArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const shuffledSongs = shuffleSongsArray(songs);
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
                All Other Songs
              </p>
              <div className="p-1 grid grid-cols-5 gap-x-1 gap-y-1">
                {songs.map((song) => (
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
