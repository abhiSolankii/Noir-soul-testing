import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-700 mb-2">Last Updated: May 23, 2024</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction</h2>
        <p className="text-gray-700 mb-4">
          {`Noir Soul Syndicate, a wholly-owned subsidiary of Noir International Holdings, LLC ("we," "our," "us"), uses cookies and 
      similar tracking technologies to enhance your experience on our website and Services. This Cookie Policy explains what 
      cookies are, how we use them, and your choices regarding cookies.`}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help the website recognize your device and remember your
          preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Types of Cookies We Use
        </h2>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold"> 1. Essential Cookies: </span> These
            cookies are necessary for the operation of our website and Services.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. Performance Cookies: </span> These
            cookies collect information about how you use our website, helping
            us improve its performance.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 3. Functional Cookies: </span> These
            cookies remember your preferences and settings to enhance your
            experience.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 4. Targeting Cookies: </span> These
            cookies are used to deliver relevant ads and track the effectiveness
            of our marketing campaigns.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">How We Use Cookies</h3>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold"> 1. To Provide Our Services: </span> We
            use cookies to enable essential features, such as user
            authentication.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. To Improve Our Services: </span> We
            use cookies to analyze usage data and improve our website’s
            performance.
          </p>
          <p className="mb-2">
            <span className="font-bold">
              {" "}
              3. To Personalize Your Experience:{" "}
            </span>{" "}
            We use cookies to remember your preferences and settings.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 4. To Market Our Services: </span> We
            use cookies to deliver personalized advertisements and measure the
            success of our marketing efforts.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Your Choices Regarding Cookies
        </h3>
        <p className="text-gray-700 mb-4">
          You can control cookies through your browser settings. However,
          disabling cookies may affect your ability to use certain features of
          our website and Services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Changes to This Cookie Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update our Cookie Policy from time to time. We will notify you
          of any changes by posting the new Cookie Policy on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about Cookie policy, please contact us at{" "}
          <a
            className="text-blue-700 active:text-red-700"
            href="mailto:noirsoulsyndicate@gmail.com"
          >
            noirsoulsyndicate@gmail.com
          </a>{" "}
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
