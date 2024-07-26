import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';


function page() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center">
    <h1 className="text-5xl mt-12 font-bold mb-8">Contact Us</h1>
    <div className="w-full md:w-4/5 flex flex-col md:flex-row">
      <div className="md:w-2/3 bg-gray-100 p-8">
        <h2 className="text-lg font-bold mb-4">If you have any queries, please do not hesitate to send us a message. We will respond to your query within 24 hours.</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">Name</label>
            <input type="text" id="name" name="name" className="border px-4 py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1">Phone</label>
            <input type="text" id="phone" name="phone" className="border px-4 py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Email</label>
            <input type="email" id="email" name="email" className="border px-4 py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="border px-4 py-2"></textarea>
          </div>
        </form>
      </div>

      {/* Right half */}
      <div className="md:w-1/3 bg-gray-800 p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="mb-4">
          <p>Email: aeshort@jmediacorp.com</p>
          <p>Phone: +1-800-372-7052</p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Address</h2>
        <p className='mb-8'>The Metaverse</p>
        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
        <div className="flex justify-center space-x-6 mt-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
          <FaFacebook size="2em" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
          <FaInstagram size="2em" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
          <FaTwitter size="2em" />
        </a>
        <a href="https://Linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
          <FaLinkedin size="2em" />
        </a>
      </div>
      </div>
    </div>

    {/* Submit Button */}
    <div className="mt-8 mb-12">
      <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700">Submit</button>
    </div>
  </div>
  <Footer/>
  </>
);
}

export default page;
