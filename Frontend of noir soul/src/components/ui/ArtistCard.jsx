import React from "react";
import Link from "next/link";
const ArtistCard = ({ artistData }) => {
  const artistDetails = {
    artistName: artistData?.name || "Loading",
    artistSong: artistData?.songs[0].name + "..." || "Loading",
    artistGenre: artistData?.genre || "Loading",
    artistImg:
      `https://gateway.pinata.cloud/ipfs/${artistData?.img}` ||
      "https://c8.alamy.com/comp/2KFX7R4/illustration-of-monkey-head-face-for-mascot-and-logo-geek-chimpanzee-icon-badge-poster-2KFX7R4.jpg",
    artistId: artistData?._id || null,
  };
  // console.log(artistDetails);
  return (
    <div className="bg-black w-[200px] h-[300px] rounded-md p-3 flex flex-col gap-2 hover:opacity-90 hover:outline font-serif relative shadow-lg overflow-hidden">
      <img
        alt="song"
        src={artistDetails.artistImg}
        className="w-full h-[70%] rounded-full object-cover  "
      />

      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <Link
            className="text-base text-white truncate no-underline cursor-pointer font-medium hover:underline"
            href={{
              pathname: "/Artist",
              query: { artistId: artistDetails.artistId },
            }}
          >
            {artistDetails.artistName
              ? artistDetails.artistName
              : "Artist name"}
          </Link>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-music-note"
            viewBox="0 0 16 16"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
            <path fill-rule="evenodd" d="M9 3v10H8V3z" />
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
          </svg>
          <a
            href="#"
            className="text-sm text-white truncate no-underline cursor-pointer font-normal hover:underline"
          >
            {artistDetails.artistSong}
          </a>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-collection-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
          </svg>
          <a className="text-sm text-white truncate no-underline cursor-pointer font-light font-sans">
            {artistDetails.artistGenre}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
