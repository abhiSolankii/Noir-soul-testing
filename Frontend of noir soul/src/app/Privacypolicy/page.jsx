import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-2">Last Updated: May 23, 2024</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction</h2>
        <p className="text-gray-700 mb-4">
          {`Noir Soul Syndicate, a wholly-owned subsidiary of Noir International Holdings, LLC ("we," "our," "us"), is committed to 
      protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your 
      information when you use our website, services, and products ("Services"). By accessing or using our Services, you agree to 
      the terms of this Privacy Policy.`}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold"> 1. Personal Information: </span> When
            you sign up for our Services, we collect personal information that
            you provide, such as your name, email address, and payment
            information.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. Usage Data: </span> We collect
            information on how you access and use our Services, including your
            IP address, browser type, and operating system.
          </p>
          <p className="mb-2">
            <span className="font-bold">
              {" "}
              3. Cookies and Tracking Technologies:{" "}
            </span>{" "}
            We use cookies and similar technologies to track activity on our
            Services and store certain information.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          How We Use Your Information
        </h3>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold">
              {" "}
              1. To Provide and Maintain Our Services:{" "}
            </span>{" "}
            We use your information to deliver the Services you request and
            maintain our platform.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. To Improve Our Services: </span> We
            analyze usage data to improve our Services and user experience.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 3. To Communicate with You: </span> We
            use your information to contact you with updates, marketing, and
            promotional materials.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 4. For Security Purposes: </span> We
            use your information to monitor and improve the security of our
            Services.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Sharing Your Information
        </h3>
        <p className="text-gray-700 mb-4">
          We do not sell or rent your personal information. We may share your
          information with:
        </p>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold"> 1. Service Providers: </span>{" "}
            Third-party companies that help us provide and improve our Services.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. Legal Requirements: </span> If
            required by law, we may disclose your information to comply with
            legal obligations.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or delete your personal
          information. You may also object to or restrict our processing of your
          information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement reasonable security measures to protect your information
          from unauthorized access and use. However, no internet-based service
          can be 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about Privacy policy, please contact us at{" "}
          <a
            className="text-blue-700 active:text-red-700"
            href="mailto:noirsoulsyndicate@gmail.com"
          >
            noirsoulsyndicate@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
