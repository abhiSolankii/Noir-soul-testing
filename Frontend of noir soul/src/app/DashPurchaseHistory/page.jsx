'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar2/sidebar2';

export default function ItemTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/transactions'); // Ensure this URL matches the server.js port
        const data = await response.json();
        setTransactions(data);
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
        <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Purchase History</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black border rounded-lg shadow-md">
            <thead>
              <tr className="bg-black text-yellow-400 border-b border-gray-200 uppercase text-m leading-normal">
                <th className="py-3 px-6 text-left">Order No.</th>
                <th className="py-3 px-6 text-left">Item Details</th>
                <th className="py-3 px-6 text-left">Date and Time</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Download Invoice</th>
              </tr>
            </thead>
            <tbody className="text-yellow-400 text-m font-light">
              {transactions.map(transaction => (
                <tr key={transaction._id} className="border-b border-gray-200 hover:bg-gray-800">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{transaction._id}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">{transaction.itemName}</td>
                  <td className="py-3 px-6 text-left">{transaction.dateAcquisition}</td>
                  <td className="py-3 px-6 text-left">{transaction.price}</td>
                  <td className="py-3 px-6 text-left">
                    <a href={transaction.itemlink} className="text-yellow-400 hover:underline">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
