import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black text-center p-1 -m-2">
        <h1 className="text-3xl pb-5 bg-black text-white p-4 rounded-lg shadow-md">
          About us
        </h1>
      </div>

      <div className="mt-8 text-black font-sans text-center px-20 mb 40">
        <h2 className="text-2xl mb-2">Who are we?</h2>
        <p className="text-lg font-serif font-medium">
          Enhance your digital ownership journey with Noir Dynasty &copy;
          Exchange and explore a fresh frontier in NFTs, cryptocurrency assets,
          and service exchange. Trade and barter with assurance on our
          pioneering platform, reshaping how you engage with the evolving
          landscape of digital transactions.
        </p>
      </div>

      <div className="flex justify-center items-center mt-5 ">
        <div className="w-700px h-400px">
          <Image
            className="w-full h-full object-cover"
            src="/assets/8635959.jpg"
            alt="About us"
            height={500}
            width={600}
          />
        </div>
      </div>

      <div className="mt-16 mb-12 text-lg mx-12 my 10 text-black font-sans text-center px-12 border-b-4 border-black">
        <h2 className="text-3xl mb-8 bg-black text-white p-4 rounded-lg shadow-md">
          Our Mission
        </h2>
        <p className="mt-6 mb-10 text-xl leading-relaxed">
          At Noir Dynasty Exchange, our mission is to revolutionize the digital
          ownership landscape by providing a cutting-edge platform for trading
          and bartering NFTs, cryptocurrency assets, and services. We are
          committed to empowering individuals to confidently navigate the
          digital transaction space while fostering innovation and trust.
        </p>
      </div>

      <div className="flex justify-center items-center mt-5 ">
        <div className="w-700px h-400px">
          <Image
            className="w-full h-full object-cover"
            src="/assets/Vision-Mission.webp"
            alt="Our Mission"
            height={500}
            width={600}
          />
        </div>
      </div>

      <div className="mt-16 mb-12 text-lg mx-12 my 10 text-black font-sans text-center px-12 border-b-4 border-black">
        <h2 className="text-3xl mb-8 bg-black text-white p-4 rounded-lg shadow-md">
          Our Vision
        </h2>
        <p className="mt-6 mb-10 text-xl leading-relaxed">
          Our vision at Noir Dynasty Exchange is to redefine the future of
          digital transactions, where individuals seamlessly exchange assets and
          services with transparency and security. We aspire to be the premier
          destination for anyone looking to participate in the dynamic world of
          NFTs and cryptocurrency, setting new standards for excellence and
          innovation in the industry.
        </p>
      </div>

      <div className="mx-10">
        <h1 className="text-center bg-black text-white h-12 p-2 mb-10">
          Meet Our Team Members
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-96 shadow-lg text-center mx-5 mb-10 p-6 font-serif">
            <div className="relative w-52 h-40 mx-auto mb-4">
              <Image
                src="/assets/team1.jpg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="my-1 text-lg">Education: MBA in Finance</p>
            <p className="my-1 text-lg">Profession: Blockchain Developer</p>
            <p className="my-1 text-lg">Company: Noir Dynasty&copy;Exchange</p>
            <p className="my-1 text-lg">Contact: john.doe@example.com</p>
          </div>

          <div className="w-96 shadow-lg text-center mx-5 mb-10 p-6 font-serif">
            <div className="relative w-52 h-40 mx-auto mb-4">
              <Image
                src="/assets/team1.jpg"
                alt="Jane Smith"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Jane Smith</h2>
            <p className="my-1 text-lg">Education: PHD in Computer Science</p>
            <p className="my-1 text-lg">Profession: AI Specialist</p>
            <p className="my-1 text-lg">Company: Noir Dynasty&copy;Exchange</p>
            <p className="my-1 text-lg">Contact: jane.smith@example.com</p>
          </div>

          <div className="w-96 shadow-lg text-center mx-5 mb-10 p-6 font-serif">
            <div className="relative w-52 h-40 mx-auto mb-4">
              <Image
                src="/assets/team1.jpg"
                className="object-cover"
                alt="David Johnson"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">David Johnson</h2>
            <p className="my-1 text-lg">
              Education: Bachelor{`'s`} in Marketing
            </p>
            <p className="my-1 text-lg">Profession: Marketing Manager</p>
            <p className="my-1 text-lg">Company: Noir Dynasty&copy;Exchange</p>
            <p className="my-1 text-lg">Contact: david.johnson@example.com</p>
          </div>

          <div className="w-96 shadow-lg text-center mx-5 mb-10 p-6 font-serif">
            <div className="relative w-52 h-40 mx-auto mb-4">
              <Image
                src="/assets/team1.jpg"
                className="w-44 h-36 object-cover mb-0"
                alt="David Johnson"
                height={500}
                width={600}
              />
            </div>
            <h2 className="text-xl font-semibold">David Johnson</h2>
            <p className="my-1 text-lg">
              Education: Bachelor{`'s`} in Marketing
            </p>
            <p className="my-1 text-lg">Profession: Marketing Manager</p>
            <p className="my-1 text-lg">Company: Noir Dynasty&copy;Exchange</p>
            <p className="my-1 text-lg">Contact: david.johnson@example.com</p>
          </div>
        </div>

        <p className="border-b-4 border-black mx-5"></p>
      </div>

      <div className="mx-10">
        <h1 className="text-center my-7 text-3xl font-sans bg-black text-white p-4 mx-24">
          Answers to Frequently Asked Questions
        </h1>
        <div className="w-700px inline-block mx-2 mb-10 p-2 font-serif">
          <h2 className="text-lg">What about Taxes?</h2>
          <p className="my-1 text-lg">
            We advise consulting with a tax professional for guidance on tax
            implications related to transactions on Noir Dynasty&copy;Exchange.
          </p>
        </div>

        <div className="w-700px inline-block mx-2 mb-10 p-2 font-serif">
          <h2 className="text-lg">
            How do I include barter transactions on my tax return?
          </h2>
          <p className="my-1 text-lg">
            We advise consulting with a tax professional for guidance on tax
            implications related to transactions on Noir Dynasty&copy;Exchange.
          </p>
        </div>

        <div className="w-700px inline-block mx-2 mb-10 p-2 font-serif">
          <h2 className="text-lg">
            How do I include barter transactions on my tax return?
          </h2>
          <p className="my-1 text-lg">
            We advise consulting with a tax professional for guidance on tax
            implications related to transactions on Noir Dynasty&copy;Exchange.
          </p>
        </div>

        <p className="border-b-4 border-black mx-10"></p>
      </div>

      <div className="mx-10">
        <h1 className="text-center my-7 text-3xl font-sans bg-black text-white p-4 mx-24">
          Contact Us
        </h1>
        <div className="w-80 inline-block text-center mx-10 mb-10 p-0 font-serif">
          <h2 className="text-lg">Location</h2>
          <p className="my-1 font-light text-gray-600">
            123 Noir Venue, City, Country
          </p>
        </div>

        <div className="w-80 inline-block text-center mx-10 mb-10 p-0 font-serif">
          <h2 className="text-lg">Email</h2>
          <p className="my-1 font-light text-gray-600">
            info@noirsoulsymdicate.com
          </p>
        </div>

        <div className="w-80 inline-block text-center mx-10 mb-10 p-0 font-serif">
          <h2 className="text-lg">Phone</h2>
          <p className="my-1 font-light text-gray-600">+123 456 7890</p>
        </div>

        <div className="w-80 inline-block text-center mx-10 mb-10 p-0 font-serif">
          <h2 className="text-lg">Social Media</h2>
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
            <a
              href="https://Linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin size="2em" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
