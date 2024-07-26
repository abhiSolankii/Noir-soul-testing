"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verify = getCookie("x-auth-token");
    if (verify) setIsLoggedIn(true);
  }, []);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              height={50}
              width={110}
              className="rounded-sm"
            />
            <span className="text-yellow-500 font-bold text-lg ml-4">
              Noir Soul Syndicate{" "}
            </span>
          </div>
        </a>
        <div className="hidden md:block">
          <a
            href="/"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Home
          </a>
          <a
            href="/Artist1"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Artists
          </a>
          <a
            href="/Home"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Music
          </a>
          {/* <a
            href="/Marketplace"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            NFT Marketplace
          </a> */}
          <a
            href="/News"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            News & Updates
          </a>
          <a
            href="/Community"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Community
          </a>
          <a
            href="/Marketplace"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Marketplace
          </a>
          <a
            href="/"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Digital wallet
          </a>
          <a
            href="/Admin"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Admin
          </a>
          {isLoggedIn ? (
            <a
              href="/Profile"
              className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
            >
              Profile
            </a>
          ) : (
            <a
              href="/Login"
              className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
            >
              Join
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
