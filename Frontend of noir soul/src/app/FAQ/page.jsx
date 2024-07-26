import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const FaqItem = ({ question, answer }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

const page = () => {
  const faqs = [
    {
      question: "What is Noir Soul Syndicate?",
      answer:
        "The Noir Soul Syndicate is a digital platform and community fostering creativity through Non-Fungible Tokens (NFTs) for art and music.",
    },
    {
      question: "How do Non-Fungible Tokens (NFTs) work?",
      answer:
        "NFTs are unique digital assets stored on a blockchain, representing ownership and authenticity of digital creations.",
    },
    {
      question: "What benefits do NFTs offer to artists and creators?",
      answer:
        "NFTs offer artists direct ownership, royalties, global reach, and authenticity for their digital creations.",
    },
    {
      question: "How can I purchase NFTs on your platform?",
      answer:
        "Browse our marketplace, select your desired NFT, and complete the purchase using cryptocurrency.",
    },
    {
      question: "Can I resell or trade the NFTs I purchase?",
      answer: "Yes, you can freely resell or trade the NFTs you purchase.",
    },
    {
      question: "How can I participate in community events and discussions?",
      answer:
        "Join our online forums, social media channels, and live events to engage in community discussions and activities.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white">
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 px-4 py-6">
          <div className="container mx-auto text-center px-16 py-16">
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-lg mt-4">
              Get answers to your questions about Noir Soul Syndicate, NFTs, and
              cryptocurrency.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ml-10 mr-10 mt-12 mb-10">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          <hr />
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Embark on Your Digital Journey with Noir Soul Syndicate
            </h2>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="md:w-1/2 mt-20 text-lg mr-10">
                <p className="ml-20 text-center">{`Unleash your creative spirit and immerse yourself in the dynamic world of Noir Soul Syndicate. Dive into the realm of 
                        digital art and music ownership, where every Non-Fungible Token (NFT) represents a unique expression of creativity. 
                        Explore our vibrant marketplace, connect with fellow enthusiasts, and discover the next wave of groundbreaking talent. 
                        Whether you're an artist, collector, or simply curious about the future of digital ownership, Noir Soul Syndicate offers a 
                        gateway to unparalleled experiences and opportunities. Join us as we redefine the boundaries of artistic expression in the 
                        digital age.`}</p>
              </div>
              <div className="md:w-1/2 ml-10 justify-center">
                <Image
                  src="/assets/NFT_digital.png"
                  alt="head image"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-8">
            <h2 className="text-3xl text-center mt-5 font-bold mb-4">
              Contact Support
            </h2>
            <p className="text-center mt-5 mb-5">
              Contact our support team for personalized assistance and guidance
              on your journey into the future of music.
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
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
