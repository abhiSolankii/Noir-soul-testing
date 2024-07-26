'use client';
import React from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';

const items = [
  { id: 1, name: "Item 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Item 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Item 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Item 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Item 5", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Item 6", image: "https://via.placeholder.com/150" },
];

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">NFT Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map(item => (
              <div key={item.id} className="border rounded-lg p-2 text-black">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                <h3 className="text-lg text-yellow-400 font-semibold text-center mb-2">{item.name}</h3>
                <div className="flex justify-between">
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Transfer</button>
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Sell</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
