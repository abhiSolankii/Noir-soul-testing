import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <hr />
      <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white mb-4">Explore</h5>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/About" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/Artist1" className="hover:text-white">
                  Artists
                </a>
              </li>
              <li className="mb-2">
                <a href="/Home" className="hover:text-white">
                  Music
                </a>
              </li>
              <li className="mb-2">
                <a href="/Marketplace" className="hover:text-white">
                  NFT Marketplace
                </a>
              </li>
              <li className="mb-2">
                <a href="/News" className="hover:text-white">
                  News & Updates
                </a>
              </li>
              <li className="mb-2">
                <a href="/Community" className="hover:text-white">
                  Community
                </a>
              </li>
              <li className="mb-2">
                <a href="/FAQ" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4">Resources</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Developer Portal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Open-Source Software
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4">Legal</h5>
            <ul>
              <li className="mb-2">
                <a href="/Privacypolicy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/Termsofservice" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/Cookiepolicy" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/Intellectual" className="hover:text-white">
                  Intellectual Property Rights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4">Connect With Us</h5>
            <ul>
              <li className="mb-2">
                <a href="/Contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/Subscribe" className="hover:text-white">
                  Subscribe to Our Newsletter
                </a>
              </li>
              <div className="flex space-x-6 mt-4 mb-4">
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
                  href="https://x.com/noirsoulsynd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTwitter size="2em" />
                </a>
                <a
                  href="https://Linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaLinkedin size="2em" />
                </a>
                <a
                  href="https://www.tiktok.com/@noirsoulsyndicate?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTiktok size="2em" />
                </a>
                <a
                  href="https://discord.gg/dBjPPyBr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaDiscord size="2em" />
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white mb-4">Interactive Features</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Sign-Up/Sign-In
                </a>
              </li>
              <li className="mb-2">
                <a href="Home" className="hover:text-white">
                  Music Player
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  User Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4">Future Innovations</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Virtual Reality Concerts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  AI Artistry
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Blockchain Integration
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Future of NFTs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          © 2024 Noir Soul Syndicate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
