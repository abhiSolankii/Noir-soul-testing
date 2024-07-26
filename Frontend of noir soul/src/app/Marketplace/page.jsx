"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCookie } from "cookies-next";

const Page = () => {
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
  const trendingNFTs = [
    {
      rank: 1,
      collection: "Courtyard.io",
      price: "16.70 MATIC",
      volume: "9 ETH",
    },
    {
      rank: 2,
      collection: "CryptoDickbutts",
      price: "0.19 ETH",
      volume: "16 ETH",
    },
    {
      rank: 3,
      collection: "Checks - VV Originals",
      price: "0.11 ETH",
      volume: "7 ETH",
    },
    { rank: 4, collection: "Lil Pudgys", price: "0.90 ETH", volume: "29 ETH" },
    {
      rank: 5,
      collection: "Azuki Elementals",
      price: "0.41 ETH",
      volume: "13 ETH",
    },
    {
      rank: 6,
      collection: "Redacted Remilio Babies",
      price: "1.64 ETH",
      volume: "39 ETH",
    },
    {
      rank: 7,
      collection: "Seedworld Vanguards",
      price: "0.33 ETH",
      volume: "8 ETH",
    },
    {
      rank: 8,
      collection: "Mutant Ape Yacht Club",
      price: "1.70 ETH",
      volume: "37 ETH",
    },
    {
      rank: 9,
      collection: "SchizoPosters",
      price: "0.39 ETH",
      volume: "7 ETH",
    },
    {
      rank: 10,
      collection: "Bored Ape Kennel Club",
      price: "0.30 ETH",
      volume: "6 ETH",
    },
  ];

  const notableCollections = [
    { title: "Orbit by Jiannan Huang", img: "url1" },
    { title: "Math Art (1980-1995)", img: "url2" },
    { title: "SERAPH Soul Series", img: "url3" },
    { title: "Construction Token by Artist", img: "url4" },
    { title: "Matr1x 2061", img: "url5" },
  ];

  const topCollectorBuys = [
    { title: "Collection A", img: "url6" },
    { title: "Collection B", img: "url7" },
    { title: "Collection C", img: "url8" },
    { title: "Collection D", img: "url9" },
    { title: "Collection E", img: "url10" },
  ];

  const [selectedSection, setSelectedSection] = useState("Trending");

  return isVerified ? (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-black text-white min-h-screen">
        <h1 className="text-5xl font-bold text-yellow-400 my-8">
          NFT Marketplace
        </h1>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedSection === "Trending"
                ? "bg-yellow-400 text-black"
                : "bg-gray-800"
            }`}
            onClick={() => setSelectedSection("Trending")}
          >
            Trending
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedSection === "Top"
                ? "bg-yellow-400 text-black"
                : "bg-gray-800"
            }`}
            // onClick={() =># }
          >
            Top
          </button>
        </div>

        {selectedSection === "Trending" ? (
          <div className="w-full max-w-7xl px-4">
            <div className="flex mb-2">
              <div className="w-1/2 pr-2">
                <h2 className="text-xl font-bold text-yellow-400">
                  Trending NFTs
                </h2>
              </div>
              <div className="w-1/2 pl-2">
                <h2 className="text-xl font-bold text-yellow-400">
                  Trending NFTs
                </h2>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <div className="flex justify-between text-yellow-400 mb-2">
                  <span className="w-1/4">Rank</span>
                  <span className="w-1/2 text-left">Collection</span>
                  <span className="w-1/4 text-right">Floor Price</span>
                  <span className="w-1/4 text-right">Volume</span>
                </div>
                {trendingNFTs.slice(0, 5).map((nft, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg mb-4 p-4">
                    <div className="flex justify-between">
                      <div className="w-1/4">{nft.rank}</div>
                      <div className="w-1/2 text-left">{nft.collection}</div>
                      <div className="w-1/4 text-right">{nft.price}</div>
                      <div className="w-1/4 text-right">{nft.volume}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-1/2 pl-2">
                <div className="flex justify-between text-yellow-400 mb-2">
                  <span className="w-1/4">Rank</span>
                  <span className="w-1/2 text-left">Collection</span>
                  <span className="w-1/4 text-right">Floor Price</span>
                  <span className="w-1/4 text-right">Volume</span>
                </div>
                {trendingNFTs.slice(5).map((nft, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg mb-4 p-4">
                    <div className="flex justify-between">
                      <div className="w-1/4">{nft.rank}</div>
                      <div className="w-1/2 text-left">{nft.collection}</div>
                      <div className="w-1/4 text-right">{nft.price}</div>
                      <div className="w-1/4 text-right">{nft.volume}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="w-full max-w-7xl px-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Notable Collections
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {notableCollections.map((collection, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img
                  src={collection.img}
                  alt={collection.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  {collection.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl px-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Top Collector Buys Today
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {topCollectorBuys.map((buy, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img
                  src={buy.img}
                  alt={buy.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  {buy.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div className="text-3xl mx-[50%] my-[50%] font-serif text-blue-500">
      Loading...
    </div>
  );
};

export default Page;
