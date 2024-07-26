'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar2/sidebar2';

export default function ItemTable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/nft-history');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
        <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Item Details</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black border rounded-lg shadow-md">
            <thead>
              <tr className="bg-black text-yellow-400 border-b border-gray-200 uppercase text-m leading-normal">
                <th className="py-3 px-6 text-left">Item Name</th>
                <th className="py-3 px-6 text-left">Date of Acquisition</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Provenance</th>
                <th className="py-3 px-6 text-left">Type</th>
              </tr>
            </thead>
            <tbody className="text-yellow-400 text-m font-light">
              {items.map(item => (
                <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-800">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{item.itemName}</td>
                  <td className="py-3 px-6 text-left">{item.dateAcquisition}</td>
                  <td className="py-3 px-6 text-left">{item.price}</td>
                  <td className="py-3 px-6 text-left">{item.provenance}</td>
                  <td className="py-3 px-6 text-left">{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
