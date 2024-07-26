"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "./News.css";

const page = () => {
  const news = [
    {
      title: "Company Announcement",
      date: "July 8, 2024",
      content: "We are excited to announce the launch of our new product!",
    },
    {
      title: "Upcoming Event",
      date: "July 15, 2024",
      content:
        "Join us for our annual conference on innovations in technology.",
    },
    {
      title: "Important Update",
      date: "July 22, 2024",
      content: "Changes to our company's operating hours starting next month.",
    },
  ];

  return (
    <div className="page">
      <Navbar />
      <header className="page-header">
        <h1>Company News and Updates</h1>
      </header>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
