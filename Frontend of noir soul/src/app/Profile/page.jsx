"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SongCard from "@/components/ui/SongCard";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { jwtDecode } from "jwt-decode";
import { getCookie, deleteCookie } from "cookies-next";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const [likedSongs, setLikedSongs] = useState([]);
  const [purchasedSongs, setPurchasedSongs] = useState([]);
  const [message, setMessage] = useState("");
  const [logout, setLogout] = useState(false);
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
        const userData = response.data.data;
        setLoggedInUserData(userData);
        setLikedSongs(response.data.likedSongs || []);
        setPurchasedSongs(userData.purchasedSongs || []);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (loggedInUserId) {
      fetchUser();
    }
  }, [loggedInUserId]);
  // console.log(loggedInUserData);
  //   console.log(likedSongs);
  //   console.log(purchasedSongs);
  // Profile pic generator function
  const gender = "male"; // Replace with actual gender from user data
  const imgGenerator =
    gender === "male"
      ? "https://avatar.iran.liara.run/public/boy"
      : "https://avatar.iran.liara.run/public/girl";

  // Logout function

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post(`http://localhost:4000/api/auth/logout`);
        // Clear the authentication cookie
        deleteCookie("x-auth-token");
        setMessage("Logged out successfully!!!");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } catch (error) {
        console.error("Error logging out in frontend: ", error);
        setMessage("Cannot logout!!!");
      }
    };
    if (logout) {
      handleLogout();
    }
  }, [logout]);

  return (
    <div className="bg-black">
      <Navbar />

      <div
        className=" bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60">
          <div className="h-[23rem] flex items-center justify-center">
            <div className="text-center text-white">
              <img
                src={imgGenerator}
                alt="profile pic"
                className="w-40 rounded-full mb-4 border-4 border-white p-1 mx-auto"
              />
              <p className="text-xl font-semibold mb-1">
                Hello {loggedInUserData?.name || "Loading..."}
              </p>
              <p className="text-xl font-bold">
                Welcome to Noir Soul Syndicate. This is your personal profile,
                where you can view and manage your information.
              </p>
              <div className="flex flex-col">
                <Link href={"/EditProfile"}>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    color="success"
                    className="w-[10rem] mx-auto "
                  >
                    Edit Profile
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  color="error"
                  className="w-[10rem] mx-auto"
                  onClick={() => setLogout(true)}
                >
                  Logout
                </Button>
              </div>
              <p className="text-red-600 text-xl font-serif font-semibold mt-5">
                {message}
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 px-4">
            <div className=" p-4 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Profile Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className=" font-medium">Username:</p>
                  <p className="text-lg font-semibold">
                    {loggedInUserData?.username || "Loading..."}
                  </p>
                </div>
                <div>
                  <p className=" font-medium">Full Name:</p>
                  <p className="text-lg font-semibold">
                    {loggedInUserData?.name || "Loading..."}
                  </p>
                </div>
                <div>
                  <p className=" font-medium">Email:</p>
                  <p className="text-lg font-semibold">
                    {loggedInUserData?.email || "Loading..."}
                  </p>
                </div>
                <div>
                  <p className=" font-medium">Gender:</p>
                  <p className="text-lg font-semibold">
                    {loggedInUserData?.gender || "Loading..."}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className=" font-medium">Favorite Songs:</p>
                  <div className="flex space-x-2">
                    {likedSongs.slice(0, 3).map((song, index) => (
                      <p key={index} className="text-lg font-semibold">
                        {song.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-2 w-full h-auto overscroll-auto mt-1 ">
        <div className="p-2">
          <p className="text-white font-serif text-2xl font-semibold">
            Songs purchased by you
          </p>
          <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar p-1">
            {loggedInUserData.purchasedSongs &&
            loggedInUserData.purchasedSongs.length > 0 ? (
              loggedInUserData.purchasedSongs.map((song) => (
                <div key={song._id} className="flex-shrink-0">
                  <SongCard songData={song} />
                </div>
              ))
            ) : (
              <p>No purchased songs found.</p>
            )}
          </div>
        </div>
        <hr className="my-10 bg-slate-500 h-1 " />
        <div className="p-2">
          <p className="text-white font-serif text-2xl font-semibold">
            Songs liked by you
          </p>
          <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar p-1">
            {loggedInUserData.likedSongs &&
            loggedInUserData.likedSongs.length > 0 ? (
              likedSongs.map((song) => (
                <div key={song._id} className="flex-shrink-0">
                  <SongCard songData={song} />
                </div>
              ))
            ) : (
              <p>No liked songs found.</p>
            )}
          </div>
        </div>
        <hr className="my-10 bg-slate-500 h-1 " />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
