'use client';
import React from 'react';
import Sidebar from '../../components/Sidebar2/sidebar2';
import Image from 'next/image';
import img from '../../../public/assets/artist1.jpg';

const Profile = () => {
  const profileData = {
    name: 'Blowfish',
    email: 'blowfish98765@gmail.com',
    profilePicture: img,
    membershipStatus: 'Premium',
    notifications: [
      { message: 'New message from Zenith', new: true },
      { message: 'You have a new order!', new: true },
      { message: 'Your order has been shipped', new: false },
    ],
  };

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="container mx-auto pl-20 py-8 flex-grow bg-black rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-center  pl-40 py-2 text-yellow-400">My Profile</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full pt-16 md:w-1/2 flex flex-col items-center">
            <div className="border-4 border-yellow-500 rounded-full w-40 h-40 overflow-hidden">
              <Image
                className="object-cover"
                src={profileData.profilePicture}
                alt="Profile picture"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-xl pt-5 text-yellow-400 font-bold mb-2">{profileData.name}</h2>
            <p className="text-white">{profileData.email}</p>
            <h3 className="text-2xl pt-10 font-bold mb-2 text-yellow-400 mt-4">Notifications</h3>
            {profileData.notifications?.length > 0 ? (
              <ul className="list-none p-0 w-full ml-96">
                {profileData.notifications.map((notification, index) => (
                  <li key={index} className="bg-gray-800 text-white py-3 px-5 my-4 rounded-md flex justify-between items-center">
                    <span>{notification.message}</span>
                    {notification.new && <span className=" text-yellow-400 text-xs px-2 py-1 rounded">New!</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white-700">No notifications yet.</p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl pl-40 pt-24 text-yellow-400 font-bold mb-2">Membership Status</h3>
            <div className="bg-gray-800 text-white text-xl py-3 px-5 mx-56 my-5 rounded-md inline-block mb-4">
              {profileData.membershipStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
