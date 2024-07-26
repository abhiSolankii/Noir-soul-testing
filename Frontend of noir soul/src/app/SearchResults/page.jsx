"use client";
import React, { useEffect, useState, useLayoutEffect, Suspense } from "react";
import Navbar2 from "../../components/Navbar2.jsx"; // Adjust the import path as needed
import axios from "axios";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer.jsx";
import ArtistCard from "@/components/ui/ArtistCard.jsx";
import Sidebar from "@/components/Sidebar/sidebar.jsx";
import MusicPlayer from "@/components/MusicPlayer/musicPlayer.jsx";
import SongCard from "@/components/ui/SongCard.jsx";

const SearchResults = () => {
  const [results, setResults] = useState({ songs: [], artists: [] });
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/search?search=${searchQuery}`,
          {
            headers: { "x-auth-token": getCookie("x-auth-token") },
          }
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results: ", error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

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
                Songs found for &quot;{searchQuery}&quot;
              </p>
              <div className="p-1 grid grid-cols-5 gap-x-1 gap-y-1">
                {results.songs.map((song) => (
                  <div key={song._id} className="flex-shrink-0">
                    <SongCard songData={song} />
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-10 bg-slate-500 h-1 " />
          </div>
          <div className="bg-black p-2 w-full h-auto overscroll-auto ">
            <hr className="my-10 bg-slate-500 h-1 " />
            <div className="p-2">
              <p className="text-white font-serif text-2xl font-semibold">
                Artists found for &quot;{searchQuery}&quot;
              </p>
              <div className="p-1 grid grid-cols-5 gap-x-1 gap-y-1">
                {results.artists.map((artist) => (
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
    <SearchResults />
  </Suspense>
);
export default Page;
