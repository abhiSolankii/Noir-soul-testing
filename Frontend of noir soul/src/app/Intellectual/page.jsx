import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Intellectual Property Rights
        </h1>
        <p className="text-gray-700 mb-2">Last Updated: May 23, 2024</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction</h2>
        <p className="text-gray-700 mb-4">
          {`Noir Soul Syndicate, a wholly-owned subsidiary of Noir International Holdings, LLC ("we," "our," "us"), respects 
      intellectual property rights and expects our users to do the same. This policy outlines our practices regarding intellectual 
      property and your responsibilities when using our Services.`}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">User Content</h2>
        <p className="text-gray-700 mb-4">
          By posting or submitting content to our platform, you grant us a
          non-exclusive, royalty-free, worldwide license to use, reproduce,
          modify, and distribute your content. You represent and warrant that
          you have the necessary rights to grant this license and that your
          content does not infringe on any third-party rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Reporting Intellectual Property Infringements
        </h2>
        <p className="text-gray-700 mb-4">
          If you believe that your intellectual property rights have been
          infringed, please notify us at{" "}
          <a
            className="text-blue-700 active:text-red-700"
            href="mailto:noirsoulsyndicate@gmail.com"
          >
            noirsoulsyndicate@gmail.com
          </a>{" "}
          with the following information:
        </p>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold">
              {" "}
              1. Description of the Infringed Work:{" "}
            </span>{" "}
            Identify the copyrighted work or intellectual property that you
            believe has been infringed.
          </p>
          <p className="mb-2">
            <span className="font-bold">
              {" "}
              2. Location of Infringing Material:{" "}
            </span>{" "}
            Provide the URL or other identifying information to help us locate
            the infringing material.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 3. Your Contact Information: </span>
            Include your name, address, telephone number, and email address.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 4. Statement of Good Faith: </span>{" "}
            Include a statement that you believe, in good faith, that the use of
            the material is not authorized by the intellectual property owner,
            its agent, or the law.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 5. Signature: </span> A physical or
            electronic signature of the person authorized to act on behalf of
            the owner of the intellectual property.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Counter-Notification
        </h2>
        <p className="text-gray-700 mb-4">
          If you believe that your content was removed or disabled due to a
          mistake or misidentification, you may submit a counter-notification to{" "}
          <a
            className="text-blue-700 active:text-red-700"
            href="mailto:noirsoulsyndicate@gmail.com"
          >
            noirsoulsyndicate@gmail.com
          </a>{" "}
          with the following information:
        </p>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold">
              {" "}
              1. Identification of the Removed Content:{" "}
            </span>{" "}
            Describe the content that was removed and the location where it
            previously appeared.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. Statement of Good Faith: </span>{" "}
            Include a statement that you believe, in good faith, that the
            content was removed due to a mistake or misidentification.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 3. Consent to Jurisdiction: </span>
            Include a statement that you consent to the jurisdiction of the
            federal court in your district or, if outside the United States, the
            jurisdiction of the courts where we are located.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 4. Signature: </span> A physical or
            electronic signature of the content owner or authorized agent.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Termination of Repeat Infringers
        </h3>
        <p className="text-gray-700 mb-4">
          We reserve the right to terminate the accounts of users who repeatedly
          infringe on intellectual property rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update our Intellectual Property Rights policy from time to
          time. We will notify you of any changes by posting the new policy on
          our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Intellectual Property Rights
          policy, please contact us at{" "}
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
