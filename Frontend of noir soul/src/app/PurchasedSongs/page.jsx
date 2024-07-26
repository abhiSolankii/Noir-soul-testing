"use client";
import React, { useEffect, useState, Suspense } from "react";
import "../globals.css";
import Navbar2 from "../../components/Navbar2.jsx";
import Footer from "@/components/Footer.jsx";
import SongCard from "../../components/ui/SongCard.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

const PageContent = () => {
  const [purchasedSongs, setPurchasedSongs] = useState([]);

  useEffect(() => {
    const fetchPurchasedSongs = async () => {
      const token = getCookie("x-auth-token");
      if (token) {
        const decoded = jwtDecode(token);
        var id = decoded._id;
      } else {
        // Redirect logic should not be here; handle it on the client side
        // redirect("/");
        console.error(
          "No token found. Redirect logic should be handled on the client side."
        );
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:4000/api/songs/purchased/${id}`
        );
        setPurchasedSongs(response.data.data);
      } catch (error) {
        console.error("Error fetching purchased songs:", error);
      }
    };

    fetchPurchasedSongs();
  }, []);

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
                Purchased Songs
              </p>
              <div className="p-1 grid grid-cols-5 gap-x-1 gap-y-1">
                {purchasedSongs.map((song) => (
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
const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);
export default Page;
