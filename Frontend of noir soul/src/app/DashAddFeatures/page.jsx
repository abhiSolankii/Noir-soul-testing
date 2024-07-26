'use client';
import React from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';

export default function AdditionalFeatures() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Additional Features</h1>

          {/* Rewards Program */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Rewards Program</h2>
            
            {/* Earning Points */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Earning Points</h3>
              <p>Ways to earn points through activities on the platform:</p>
              <ul className="list-disc ml-4">
                <li>Listening to music</li>
                <li>Participating in community events</li>
                <li>Sharing and engaging with content</li>
              </ul>
            </div>

            {/* Redeem Rewards */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Redeem Rewards</h3>
              <p>Options to redeem points for exclusive benefits:</p>
              <ul className="list-disc ml-4">
                <li>Exclusive content access</li>
                <li>Discounts on merchandise</li>
                <li>Early access to new features</li>
              </ul>
            </div>

            {/* Leaderboard */}
            <div className="border rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Leaderboard</h3>
              <p className="mb-4">See how you rank among other users in the rewards program:</p>
              <ol className="list-decimal ml-4">
                <li className="flex justify-between items-center py-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="text-lg text-white mr-4">1. User A</span>
                    <span className="text-lg text-yellow-400">5000 points</span>
                  </div>
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">Follow</button>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="text-lg text-white mr-4">2. User B</span>
                    <span className="text-lg text-yellow-400">4500 points</span>
                  </div>
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">Follow</button>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="text-lg text-white mr-4">3. User C</span>
                    <span className="text-lg text-yellow-400">4000 points</span>
                  </div>
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">Follow</button>
                </li>
              </ol>
            </div>
          </div>

          {/* Beta Features */}
          <div className="border rounded-lg p-4">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Beta Features</h2>
            
            {/* Current Beta Programs */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Current Beta Programs</h3>
              <p>List of features in beta testing:</p>
              <ul className="list-disc ml-4">
                <li>New music recommendation algorithm</li>
                <li>Improved social interaction tools</li>
                <li>Advanced search functionality</li>
              </ul>
            </div>

            {/* Join Beta */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Join Beta</h3>
              <p>Option to participate in beta testing:</p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Join Beta</button>
            </div>

            {/* Provide Feedback */}
            <div className="border rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Provide Feedback</h3>
              <p>Share your experience and suggestions for improvement:</p>
              <textarea className="w-full bg-gray-800 text-white p-2 rounded" rows="4" placeholder="Enter your feedback..."></textarea>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 mt-2">Submit Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
