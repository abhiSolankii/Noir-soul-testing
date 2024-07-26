"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Sidebar2/sidebar2";

const FAQSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3
        className="text-2xl font-semibold text-yellow-400 mb-2 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </span>
      </h3>
      {isOpen && children}
    </div>
  );
};

const Support = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
        <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">
          Support Center
        </h1>
        <p className="mb-8">
          Welcome to the Noir Soul Syndicate Support Center. We{"'re"} here to
          ensure you have the best experience on our platform. Explore our
          resources and guides below to get the help you need.
        </p>

        {/* Help Center */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Help Center
          </h2>

          {/* FAQs */}
          <FAQSection title="FAQs: Commonly Asked Questions and Their Answers">
            <FAQSection title="Account Management">
              <ul className="list-disc ml-4">
                <li>
                  <strong>How do I reset my password?</strong>
                  <p>
                    To reset your password, go to the login page and click on{" "}
                    {"'Forgot Password.'"} Follow the instructions sent to your
                    registered email.
                  </p>
                </li>
                <li>
                  <strong>How do I update my profile information?</strong>
                  <p>
                    Navigate to the {"'Account Overview'"} section in your
                    dashboard and select {"'Edit Profile.'"}{" "}
                  </p>
                </li>
                <li>
                  <strong>
                    What are the benefits of upgrading to a premium membership?
                  </strong>
                  <p>
                    Premium membership offers exclusive benefits such as early
                    access to new releases, higher rewards points, and priority
                    support.
                  </p>
                </li>
              </ul>
            </FAQSection>

            <FAQSection title="NFT Management">
              <ul className="list-disc ml-4">
                <li>
                  <strong>How do I transfer an NFT to another user?</strong>
                  <p>
                    In the {"'My Collection'"} section, select the NFT you wish
                    to transfer and click on {"'Transfer.'"} Enter the recipient
                    {"'s"} wallet address and confirm the transaction.
                  </p>
                </li>
                <li>
                  <strong>Can I sell my NFTs on the platform?</strong>
                  <p>
                    Yes, you can list your NFTs for sale in the{" "}
                    {"'Transfer or Sell NFTs'"} section within{" "}
                    {"'My Collection.'"}{" "}
                  </p>
                </li>
              </ul>
            </FAQSection>

            <FAQSection title="Music Library">
              <ul className="list-disc ml-4">
                <li>
                  <strong>How can I download purchased tracks?</strong>
                  <p>
                    Go to your {"'Music Library,'"} select the track you wish to
                    download, and click on {"'Download.'"}{" "}
                  </p>
                </li>
                <li>
                  <strong>How do I share music tracks with friends?</strong>
                  <p>
                    Select the track from your {"'Music Library,'"} and use the{" "}
                    {"'Share with Friends'"} option to send it via social media
                    or email.
                  </p>
                </li>
              </ul>
            </FAQSection>
          </FAQSection>

          {/* Tutorials */}
          <FAQSection title="Tutorials: Step-by-Step Guides on Using Platform Features">
            <ul className="list-disc ml-4">
              <li>
                <strong>Setting Up Your Account:</strong> Detailed instructions
                on creating and customizing your profile, securing your account,
                and navigating the dashboard.
              </li>
              <li>
                <strong>Managing NFTs:</strong> A comprehensive guide to buying,
                selling, and transferring NFTs, as well as viewing your NFT
                history and provenance.
              </li>
              <li>
                <strong>Using the Music Library:</strong> Learn how to play,
                download, and share music tracks, and create playlists for your
                enjoyment.
              </li>
              <li>
                <strong>Cryptocurrency Wallet Management:</strong> Instructions
                on how to deposit, withdraw, and manage your funds, along with
                understanding transaction histories and balances.
              </li>
              <li>
                <strong>Engaging with the Community:</strong> Tips on
                participating in forums, attending virtual events, and enhancing
                your community presence through posts and comments.
              </li>
            </ul>
          </FAQSection>
        </div>

        {/* Contact Support */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Contact Support
          </h2>
          <p>Reach out to our support team for personalized assistance:</p>
          <ul className="list-disc ml-4">
            <li>
              <strong>Email Support:</strong> Send us an email at{" "}
              <a
                href="mailto:support@noirsoulsyndicate.com"
                className="text-yellow-400"
              >
                support@noirsoulsyndicate.com
              </a>{" "}
              for detailed inquiries or issues.
            </li>
            <li>
              <strong>Live Chat:</strong> Access live chat support by clicking
              the chat icon on the bottom right of the platform. Available 24/7
              for immediate assistance.
            </li>
            <li>
              <strong>Phone Support:</strong> Call us at 1-800-123-4567 for
              urgent matters. Our support team is available Monday to Friday, 9
              AM to 5 PM (EST).
            </li>
          </ul>
        </div>

        {/* Feedback */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Feedback
          </h2>
          <p>
            Your feedback helps us improve the Noir Soul Syndicate experience.
            We value your input and strive to address all suggestions and
            concerns promptly.
          </p>

          {/* Feedback Form */}
          <div className="border rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              Submit Feedback
            </h3>
            <p>
              Fill out our feedback form to share your thoughts. Provide details
              about your experience, any issues you{"'ve"} encountered, and
              suggestions for improvement.
            </p>
            <textarea
              className="w-full bg-gray-800 text-white p-2 rounded mb-2"
              rows="4"
              placeholder="Enter your feedback..."
            ></textarea>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
              Submit Feedback
            </button>
          </div>

          {/* Feature Requests */}
          <div className="border rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              Feature Requests
            </h3>
            <p>
              Suggest new features you{"'d"} like to see on the platform. We
              prioritize user-driven innovation.
            </p>
            <textarea
              className="w-full bg-gray-800 text-white p-2 rounded mb-2"
              rows="4"
              placeholder="Enter your feature request..."
            ></textarea>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
              Submit Feature Request
            </button>
          </div>

          {/* View Responses */}
          <div className="border rounded-lg p-4">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              View Responses
            </h3>
            <p>
              Stay informed about changes and updates made based on user
              feedback. Check out our regular updates on how your suggestions
              are shaping the platform.
            </p>
          </div>
        </div>

        {/* Additional Support Resources */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Additional Support Resources
          </h2>

          {/* Community Forums */}
          <FAQSection title="Community Forums">
            <ul className="list-disc ml-4">
              <li>
                Participate in discussions, ask questions, and share insights
                with other members.
              </li>
              <li>
                Access the {"'Latest Discussions'"} to see recent topics and
                threads.
              </li>
              <li>
                Track your contributions through {"'My Posts'"} and start new
                discussions with {"'Create New Post.'"}{" "}
              </li>
            </ul>
          </FAQSection>

          {/* Events */}
          <FAQSection title="Events">
            <ul className="list-disc ml-4">
              <li>
                Stay updated on upcoming events, concerts, and webinars with our{" "}
                {"'Event Calendar.'"}{" "}
              </li>
              <li>
                View and manage events you{"'ve"} registered for or attended
                under {"'My Events.'"}{" "}
              </li>
              <li>
                Learn how to host your own event or concert with{" "}
                {"'Host an Event.'"}{" "}
              </li>
            </ul>
          </FAQSection>
        </div>
      </div>
    </div>
  );
};

export default Support;
