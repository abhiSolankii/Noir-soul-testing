'use client';
import React from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';

export default function Settings() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Settings</h1>

          {/* Security Settings */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Security Settings</h2>

            {/* Two-Factor Authentication */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Two-Factor Authentication</h3>
              <p>Enable or disable two-factor authentication for extra security:</p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 mt-2">Enable 2FA</button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="border rounded-lg p-4">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Notification Settings</h2>
            
            {/* Email Notifications */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Email Notifications</h3>
              <p>Manage your email notification preferences:</p>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400" />
                <span className="ml-2">Receive updates about new features and offers</span>
              </label>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400" />
                <span className="ml-2">Receive activity notifications</span>
              </label>
            </div>

            {/* Push Notifications */}
            <div className="border rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Push Notifications</h3>
              <p>Manage your push notification preferences:</p>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400" />
                <span className="ml-2">Receive updates about new features and offers</span>
              </label>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400" />
                <span className="ml-2">Receive activity notifications</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
