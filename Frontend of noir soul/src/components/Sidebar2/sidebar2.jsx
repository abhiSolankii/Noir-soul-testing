"use client";
import React, { useState } from "react";
const Sidebar2 = () => {
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [transactionOpen, setTransactionOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);

  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-black border-r border-gray-200 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <a
                href="/Dashboard"
                className="flex items-center p-2 text-base font-normal text-yellow-400 rounded-lg dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">NSS Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-yellow-400 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-yellow-400 dark:hover:bg-gray-700"
                aria-controls="dropdown-overview"
                data-collapse-toggle="dropdown-overview"
                onClick={() => setOverviewOpen(!overviewOpen)}
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Overview
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-overview"
                className={`${
                  overviewOpen ? "block" : "hidden"
                } bg-black dark:bg-black-800 py-2 pl-4 pr-8 mt-2 rounded-md shadow-md`}
              >
                <li>
                  <a
                    href="/DashAccount"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Account Overview
                  </a>
                </li>
                <li>
                  <a
                    href="/DashEditProfile"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/DashSettings"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-yellow-400 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-yellow-400 dark:hover:bg-gray-700"
                aria-controls="dropdown-collection"
                data-collapse-toggle="dropdown-collection"
                onClick={() => setCollectionOpen(!collectionOpen)}
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  My Collection
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-collection"
                className={`${
                  collectionOpen ? "block" : "hidden"
                } bg-black dark:bg-black-800 py-2 pl-4 pr-8 mt-2 rounded-md shadow-md`}
              >
                <li>
                  <a
                    href="/DashNFT"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    NFTs
                  </a>
                </li>
                <li>
                  <a
                    href="/DashNFTHistory"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    NFT History
                  </a>
                </li>
                <li>
                  <a
                    href="/DashMusicLib"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Music
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-yellow-400 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-yellow-400 dark:hover:bg-gray-700"
                aria-controls="dropdown-transaction"
                data-collapse-toggle="dropdown-transaction"
                onClick={() => setTransactionOpen(!transactionOpen)}
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Transactions
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-transaction"
                className={`${
                  transactionOpen ? "block" : "hidden"
                } bg-black dark:bg-black-800 py-2 pl-4 pr-8 mt-2 rounded-md shadow-md`}
              >
                <li>
                  <a
                    href="/DashPurchaseHistory"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Purchase History
                  </a>
                </li>
                <li>
                  <a
                    href="/DashCryptoWallet"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Cryptocurrency Wallet
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-yellow-400 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-yellow-400 dark:hover:bg-gray-700"
                aria-controls="dropdown-analytics"
                data-collapse-toggle="dropdown-analytics"
                onClick={() => setAnalyticsOpen(!analyticsOpen)}
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Analytics
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-analytics"
                className={`${
                  analyticsOpen ? "block" : "hidden"
                } bg-black dark:bg-black-800 py-2 pl-4 pr-8 mt-2 rounded-md shadow-md`}
              >
                <li>
                  <a
                    href="/DashAssetPerform"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Asset Performance
                  </a>
                </li>
                <li>
                  <a
                    href="/DashListHabits"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Listening Habits
                  </a>
                </li>
                <li>
                  <a
                    href="/DashEngagement"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow-400"
                  >
                    Engagement
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/DashCommunity"
                className="flex items-center p-2 text-base font-normal text-yellow-400 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow group"
              >
                <span className="ml-3">Community</span>
              </a>
            </li>
            <li>
              <a
                href="/DashSupport"
                className="flex items-center p-2 text-base font-normal text-yellow-400 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow group"
              >
                <span className="ml-3">Support</span>
              </a>
            </li>
            <li>
              <a
                href="/DashAddFeatures"
                className="flex items-center p-2 text-base font-normal text-yellow-400 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-yellow group"
              >
                <span className="ml-3">Additional Features</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar2;
