import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-700 mb-2">Last Updated: May 23, 2024</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction</h2>
        <p className="text-gray-700 mb-4">
          {`These Terms of Service ("Terms") govern your use of the services provided by Noir Soul Syndicate, 
      a wholly-owned subsidiary of Noir International Holdings, LLC ("we," "our," "us"). By accessing or 
      using our website, services, and products ("Services"), you agree to be bound by these Terms.`}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Services</h2>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold"> 1. Eligibility:</span> You must be at
            least 18 years old to use our Services.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. Account Registration:</span> You
            must provide accurate and complete information when creating an
            account. You are responsible for maintaining the confidentiality of
            your account information.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 3. Prohibited Activities:</span> You
            agree not to use our Services for any illegal or unauthorized
            purpose, including but not limited to violating intellectual
            property rights, distributing harmful software, or engaging in
            fraudulent activities.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Intellectual Property
        </h3>
        <p className="text-gray-700 mb-4">
          All content on our platform, including text, graphics, logos, and
          software, is the property of Noir Soul Syndicate or its licensors and
          is protected by intellectual property laws. You may not use any
          content without our prior written permission.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">User Content</h3>
        <p className="text-gray-700 mb-4">
          By posting content on our platform, you grant us a non-exclusive,
          royalty-free, worldwide license to use, reproduce, and distribute your
          content. You represent and warrant that you have the right to grant
          this license.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Disclaimers and Limitation of Liability
        </h2>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-bold"> 1. No Warranties: </span> Our Services
            are provided {`"as is"`} without any warranties, express or implied.
          </p>
          <p className="mb-2">
            <span className="font-bold"> 2. Limitation of Liability: </span> In
            no event shall Noir Soul Syndicate be liable for any indirect,
            incidental, special, or consequential damages arising out of your
            use of our Services.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These Terms are governed by the laws of [State/Country], without
          regard to its conflict of law principles. Any legal action or
          proceeding arising under these Terms will be brought exclusively in
          the federal or state courts located in [State/Country].
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Changes to These Terms
        </h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms from time to time. We will notify you of any
          changes by posting the new Terms on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms, please contact us at{" "}
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
