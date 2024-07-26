"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const SongCard = ({ songData }) => {
  // console.log(songData);
  const songDetails = {
    songName: songData?.name || "Loading",
    songArtist: songData?.artistName || "Loading",
    songGenre: songData?.genre || "Loading",
    songImg: songData?.img
      ? `https://gateway.pinata.cloud/ipfs/${songData.img}`
      : "https://store.playstation.com/store/api/chihiro/00_09_000/container/IN/en/99/EP3351-CUSA08250_00-AV00000000000145/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
    duration: songData?.duration + "sec" || "30 sec",
    songArtistId: songData?.artist || null,
    songId: songData?._id || null,
  };

  const [isHovered, setIsHovered] = useState(false);

  // console.log(songDetails);
  return (
    <div
      className="bg-black w-[200px] h-[300px] rounded-md p-3 flex flex-col gap-2 hover:opacity-90 hover:outline font-serif relative shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={{
          pathname: "/Song",
          query: {
            songId: songDetails.songId,
          },
        }}
      >
        <div className="w-full h-[100%] mb-2">
          <img
            alt="song"
            src={songDetails.songImg}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </Link>
      {/* play button starts  */}
      {/* {isHovered && (
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
      )} */}
      {/* play button ends  */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // class="bi bi-music-note"
            viewBox="0 0 16 16"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
            <path d="M9 3v10H8V3z" /> {/* fill-rule="evenodd"  */}
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
          </svg>
          <Link
            href={{
              pathname: "/Song",
              query: {
                songId: songDetails.songId,
              },
            }}
            className="text-base text-white truncate no-underline cursor-pointer font-medium hover:underline"
            // onClick={handleSongClick}
          >
            {songDetails?.songName ? songDetails.songName : "Song name"}
          </Link>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // class="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <Link
            href={{
              pathname: "/Artist",
              query: { artistId: songDetails.songArtistId },
            }}
            className="text-sm text-white truncate no-underline cursor-pointer font-normal hover:underline"
          >
            {songDetails?.songArtist ? songDetails.songArtist : "Artist name"}
          </Link>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // class="bi bi-collection-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
          </svg>
          <a className="text-sm text-white truncate no-underline cursor-pointer font-light font-sans">
            {songDetails?.songGenre ? songDetails.songGenre : "Genre"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
