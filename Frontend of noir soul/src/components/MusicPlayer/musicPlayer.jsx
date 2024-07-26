import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSearchParams } from "next/navigation";

function MusicPlayer() {
  const searchParams = useSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  //Default data
  const [music, setMusic] = useState({
    id: "",
    name: "Noir soul syndicate music player",
    artistName: "click on songs to play",
    img: "/logo.png",
    musicUrl: "#",
  });

  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const songId = searchParams.get("songId");

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/songs/${songId}`
        );
        const songData = response.data.data;
        if (songData) {
          setMusic({
            id: songData._id,
            name: songData.name,
            artistName: songData.artistName,
            img: `https://gateway.pinata.cloud/ipfs/${songData.img}`,
            musicUrl: `https://gateway.pinata.cloud/ipfs/${songData.song}`,
          });
        }
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    };

    if (songId) {
      fetchSong();
    }
  }, [songId]);

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.onloadedmetadata = () => {
        setDuration(audioElement.current.duration);
        console.log(
          "Metadata loaded, duration: ",
          audioElement.current.duration
        );
      };

      audioElement.current.ontimeupdate = () => {
        setCurrTime(audioElement.current.currentTime);
        setSeekTime((audioElement.current.currentTime / duration) * 100);
      };

      if (music.musicUrl && audioElement.current.src !== music.musicUrl) {
        audioElement.current.src = music.musicUrl;
      }
    }

    return () => {
      if (audioElement.current) {
        audioElement.current.pause();
      }
    };
  }, [music.musicUrl, duration]);

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioElement.current.play().catch((error) => {
        console.error("Error playing audio: ", error);
      });
    } else {
      audioElement.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeekChange = (event) => {
    const newValue = event.target.value;
    if (audioElement.current) {
      audioElement.current.currentTime = (newValue * duration) / 100;
    }
    setSeekTime(newValue);
  };

  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <img src={music.img} alt={music.name} className="w-12 h-12 mr-4" />
        <div>
          <div className="text-lg">{music.name}</div>
          <div className="text-sm text-gray-400">{music.artistName}</div>
        </div>
        {!isLiked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-white cursor-pointer ml-4 bi bi-heart"
            onClick={toggleLiked}
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-yellow-600 cursor-pointer ml-4 bi bi-heart-fill"
            onClick={toggleLiked}
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        )}
      </div>

      <div className="flex items-center">
        <button
          onClick={handlePlayPause}
          className="mx-2 focus:outline-none hover:bg-yellow-600 rounded-full"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          )}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={seekTime}
          onChange={handleSeekChange}
          className="w-52 mx-2 cursor-pointer text-red-500"
        />

        <div className="text-sm">
          <span>{formatTime(currTime)}</span> /{" "}
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div>
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
            className="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5-.5h4.79L7 5.803V1.5a.5.5 0 0 1 1 0v4.303L10.21 9.4H15a.5.5 0 0 1 0 1H9.5v4a.5.5 0 0 1-1 0v-4H1a.5.5 0 0 1-.5-.5zm12.354 1.646-1.147-1.146a.5.5 0 1 0-.707.708l.353.353H8a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .354-.146l1.147-1.147a.5.5 0 1 0-.707-.707zM11 14.5v-3h1v3a.5.5 0 0 1-1 0z" />
          </svg>
          <span>Download</span>
        </Button>
      </div>

      <audio ref={audioElement} />
    </div>
  );
}

export default MusicPlayer;
