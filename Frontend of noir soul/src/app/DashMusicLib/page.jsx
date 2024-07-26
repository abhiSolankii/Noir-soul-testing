'use client';
import React from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';

const musicLibrary = [
  { id: 1, name: "Track 1", artist: "Artist 1", url: "https://example.com/track1.mp3", downloadLink: "https://example.com/download/track1.mp3" },
  { id: 2, name: "Track 2", artist: "Artist 2", url: "https://example.com/track2.mp3", downloadLink: "https://example.com/download/track2.mp3" },
  { id: 3, name: "Track 3", artist: "Artist 3", url: "https://example.com/track3.mp3", downloadLink: "https://example.com/download/track3.mp3" },
];

export default function MusicLibrary() {
  const handleShare = (trackName) => {
    const shareText = `Check out this awesome track: ${trackName}!`;
    if (navigator.share) {
      navigator.share({
        title: 'Music Library',
        text: shareText,
        url: window.location.href
      }).catch(error => console.error('Error sharing:', error));
    } else {
      alert('Share feature is not supported in this browser.');
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Music Library</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {musicLibrary.map(track => (
              <div key={track.id} className="border rounded-lg p-4 m-4 text-black bg-black">
                <h3 className="text-lg text-yellow-400 font-semibold text-center mb-2">{track.name}</h3>
                <p className="text-center text-white mb-4">{track.artist}</p>
                <audio controls className="w-full mb-4">
                  <source src={track.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="flex justify-between">
                  <a href={track.downloadLink} className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded text-center" download>Download</a>
                  <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded" onClick={() => handleShare(track.name)}>Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
