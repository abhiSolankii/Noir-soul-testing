import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

const page = () => {
  const content = [
    {
      imageUrl: "https://source.unsplash.com/random/400x300",
      title: "Artwork 1",
      description: "Description of Artwork 1",
    },
    {
      imageUrl: "https://source.unsplash.com/random/401x301",
      title: "NFT 1",
      description: "Description of NFT 1",
    },
    {
      imageUrl: "https://source.unsplash.com/random/402x302",
      title: "Blog Post 1",
      description: "Description of Blog Post 1",
    },
    {
      imageUrl: "https://source.unsplash.com/random/403x303",
      title: "Artwork 2",
      description: "Description of Artwork 2",
    },
    {
      imageUrl: "https://source.unsplash.com/random/404x304",
      title: "NFT 2",
      description: "Description of NFT 2",
    },
    {
      imageUrl: "https://source.unsplash.com/random/405x305",
      title: "Blog Post 2",
      description: "Description of Blog Post 2",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Community Page
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-5">
            Welcome to the Noir Dynasty Exchange community, where fans, artists,
            and investors come together to connect, engage, and explore new
            opportunities in the digital asset space. Our Community page offers
            a vibrant hub for networking, sharing, and discovering exciting
            content and events.
          </p>
        </div>
      </div>
      <div className="bg-gray-700 z-10 py-10 px-28 items-center justify-center text-center">
        <h2 className="text-4xl md:text-4xl font-semibold text-white mb-10 mt-5">
          Forum Integration
        </h2>
        <p className="text-white mb-8 text-xl">
          Join discussions, ask questions, and share insights with fellow
          community members through our integrated forum. Engage in
          conversations about the latest trends, upcoming NFT drops, crypto
          market analysis, and more. Connect with like-minded individuals and
          expand your network within the community.
        </p>
        <div className="flex justify-center space-x-6 mt-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <FaFacebook size="2em" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
          >
            <FaInstagram size="2em" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
          >
            <FaTwitter size="2em" />
          </a>
        </div>
        <p className="text-white text-xl mt-10 mb-6">
          {`"Join our vibrant community on Discord today to interact with fellow enthusiasts, share insights, and stay updated on the latest trends and events. Let's grow and connect together!"`}
        </p>
        <div className="flex justify-center space-x-3 mt-4">
          <a
            href="https://discord.com/invite/yourdiscordlink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            <FaDiscord size="2em" />
          </a>
          <span className="text-2xl mb-12 font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
            Discord
          </span>
        </div>
        <hr />
        <h2 className="text-4xl text-white font-semibold mb-10 mt-16">
          Events Calendar
        </h2>
        <p className="text-white text-xl mb-8">
          {` Discover upcoming virtual concerts, meetups, webinars, and exclusive
          gatherings through our events calendar. Stay informed about
          opportunities to connect with industry experts, artists, and fellow
          enthusiasts. RSVP to events and mark your calendar to ensure you don't
          miss out on any exciting opportunities.`}
        </p>
        <div className="bg-gray-600 shadow-lg rounded-lg p-6 mb-8 max-w-xl mx-auto">
          <h3 className="text-xl text-white font-bold mb-2">
            Upcoming Event: Virtual Concert
          </h3>
          <p className="text-white mb-4">
            {` Join us for an exclusive virtual concert featuring top artists from
            around the world. Don't miss this chance to enjoy great music and
            connect with fellow fans!`}
          </p>
          <div className="justify-center items-center">
            <Image
              src="/assets/concert.jpg"
              alt="event"
              height={500}
              width={600}
            />
          </div>
          <div className="text-white mb-4">
            <p>
              <strong>Date:</strong> June 25, 2024
            </p>
            <p>
              <strong>Time:</strong> 7:00 PM - 9:00 PM (EST)
            </p>
          </div>
        </div>
        <hr />
        <h2 className="text-4xl text-white font-bold mt-16 mb-8 text-center">
          Our Community Creations
        </h2>
        <p className="text-center px-36 text-xl text-gray-300 mb-10">
          {`Explore the diverse and creative works shared by our community
          members. From stunning artworks to insightful blog posts, there's
          something for everyone to enjoy and engage with.`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="bg-gray-600 shadow-lg rounded-lg p-4 mb-6"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white mb-4">{item.description}</p>
            </div>
          ))}
        </div>
        <hr />
        <p className="text-center text-2xl text-white mt-16 mb-6">
          {`Stay updated with our community's upcoming events and gatherings.
          Check out our calendar to never miss an opportunity to connect and
          engage.`}
        </p>
        <div className="flex justify-center mt-10 relative overflow-hidden mb-10">
          <div
            className="relative overflow-hidden"
            style={{ width: "100%", maxWidth: "800px", height: "400px" }}
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=4a12daf7e292e4efa45285185ca9459167aa512a5ffbfc08d6164722096e022e%40group.calendar.google.com&ctz=UTC"
              style={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="mt-12 text-white">
          <h2 className="text-4xl text-center mt-5 font-bold mb-4">
            Contact Support
          </h2>
          <p className="text-center text-xl mt-5 mb-5">
            Contact our support team for personalized assistance and guidance on
            your journey into the future of music.
          </p>
          <div className="flex justify-center items-center mb-16">
            <a
              href="/Contact"
              className="inline-block px-20 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
