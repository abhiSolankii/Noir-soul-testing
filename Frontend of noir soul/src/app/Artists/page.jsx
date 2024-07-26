"use client";
import React, { useState, useEffect, Suspense } from "react";
import "../globals.css";
import Navbar2 from "../../components/Navbar2.jsx";
import ArtistCard from "../../components/ui/ArtistCard.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import MusicPlayer from "../../components/MusicPlayer/musicPlayer.jsx";
import Footer from "@/components/Footer.jsx";
import axios from "axios";

const PageContent = () => {
  const [artists, setArtists] = useState([]);

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
                All Other Artists
              </p>
              <div className="p-1 grid grid-cols-5 gap-x-1 gap-y-1">
                {artists.map((artist) => (
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
  );
};
const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);
export default Page;
