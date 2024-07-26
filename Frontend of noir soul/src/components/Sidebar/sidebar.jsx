"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import "@/app/globals.css";
import { redirect } from "next/navigation";

const Sidebar = () => {
  const [selected, setSelected] = useState("home");
  const [isSearchSelected, setIsSearchSelected] = useState(false);
  // console.log(selected);
  // console.log(isSearchSelected);
  useEffect(() => {
    if (selected === "search") {
      setIsSearchSelected(true);
    } else {
      setIsSearchSelected(false);
    }
    if (selected === "liked") {
      redirect("/Liked");
    }
    if (selected === "purchased") {
      redirect("/PurchasedSongs");
    }
  }, [selected]);

  return (
    <div className="flex w-72 mt-[3.6rem] bg-black fixed left-0 top-0 h-full overflow-y-auto overscroll-auto">
      <div className="w-full whitespace-nowrap h-auto text-white bg-black p-6 ">
        <div className="flex flex-col  gap-10   ">
          <div
            className={`flex flex-row items-center  gap-1 sidebar-item ${
              selected === "home" ? "selected-item" : ""
            } `}
            onClick={() => {
              setSelected("home");
            }}
          >
            <span className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentcolor"
                className="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>
            </span>
            <a className="text-white no-underline" href="/Home">
              Home
            </a>
          </div>
          <div
            className={`flex flex-row items-center gap-1 sidebar-item ${
              selected === "search" ? "selected-item" : ""
            } `}
            onClick={() => {
              setSelected("search");
            }}
          >
            <span className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <a className="text-white no-underline" href="/SearchResults">
              Search
            </a>
          </div>
          <hr className="my-10" />

          <div
            className={`flex flex-row items-center gap-1 sidebar-item ${
              selected === "liked" ? "selected-item" : ""
            } `}
            onClick={() => {
              setSelected("liked");
            }}
          >
            <span className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </span>
            <p>Liked songs</p>
          </div>

          <div
            className={`flex flex-row items-center gap-1 sidebar-item ${
              selected === "bookmark" ? "selected-item" : ""
            } `}
            onClick={() => {
              setSelected("bookmark");
            }}
          >
            <span className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
            </span>
            <p>Bookmarked Songs</p>
          </div>
          <div
            className={`flex flex-row items-center gap-1 sidebar-item ${
              selected === "purchased" ? "selected-item" : ""
            } `}
            onClick={() => {
              setSelected("purchased");
            }}
          >
            <span className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </span>
            <p>Purchased songs</p>
          </div>
        </div>
      </div>
      <span className="h-screen w-2 bg-slate-800"></span>
    </div>
  );
};

export default Sidebar;
