'use client';
import React, { useState } from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';

export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to the community!", content: "Introduce yourself and get to know other members.", replies: [] },
    { id: 2, title: "Favorite music genres?", content: "Share your favorite music genres and why you love them.", replies: [] }
  ]);
  const [events, setEvents] = useState([
    { id: 1, name: "Concert A", date: "2024-07-10", registered: true },
    { id: 2, name: "Webinar B", date: "2024-07-15", registered: false }
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [newEvent, setNewEvent] = useState({ name: "", date: "", registered: false });
  const [selectedPost, setSelectedPost] = useState(null);
  const [newReply, setNewReply] = useState("");
  const [showEventForm, setShowEventForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPosts = [...posts, { id: posts.length + 1, ...newPost, replies: [] }];
    setPosts(updatedPosts);
    setNewPost({ title: "", content: "" });
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const updatedEvents = [...events, { id: events.length + 1, ...newEvent }];
    setEvents(updatedEvents);
    setNewEvent({ name: "", date: "", registered: false });
    setShowEventForm(false);
  };

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleReplySubmit = (postId) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, replies: [...post.replies, newReply] } : post
    );
    setPosts(updatedPosts);
    setNewReply("");
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
        <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Community</h1>

        {/* Forums */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Forums</h2>
          <p className="mb-4">Participate in community discussions, ask questions, and share insights.</p>

          {/* Latest Discussions */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Latest Discussions</h3>
            <ul className="list-disc ml-4">
              {posts.map((post) => (
                <li key={post.id} className="mb-2 cursor-pointer" onClick={() => handlePostClick(post)}>
                  <strong>{post.title}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* My Posts */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">My Posts</h3>
            <ul className="list-disc ml-4">
              {posts.map((post) => (
                <li key={post.id} className="mb-2 cursor-pointer" onClick={() => handlePostClick(post)}>
                  <strong>{post.title}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* Create New Post */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Create New Post</h3>
            <form onSubmit={handleSubmit} className="border rounded-lg p-4 bg-gray-800">
              <div className="mb-4">
                <label htmlFor="title" className="block text-yellow-400 mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newPost.title}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-yellow-400 mb-2">Content</label>
                <textarea
                  id="content"
                  name="content"
                  value={newPost.content}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Submit Post</button>
            </form>
          </div>
        </div>

        {/* Post Details */}
        {selectedPost && (
          <div className="border rounded-lg p-4 mb-8 bg-gray-800">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{selectedPost.title}</h2>
            <p className="mb-4">{selectedPost.content}</p>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Replies</h3>
            <ul className="list-disc ml-4 mb-4">
              {selectedPost.replies.map((reply, index) => (
                <li key={index} className="mb-2">{reply}</li>
              ))}
            </ul>
            <form onSubmit={(e) => { e.preventDefault(); handleReplySubmit(selectedPost.id); }} className="border rounded-lg p-4 bg-gray-700">
              <div className="mb-4">
                <label htmlFor="reply" className="block text-yellow-400 mb-2">Reply</label>
                <textarea
                  id="reply"
                  name="reply"
                  value={newReply}
                  onChange={handleReplyChange}
                  className="w-full p-2 rounded bg-gray-600 text-white"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Submit Reply</button>
            </form>
          </div>
        )}

        {/* Events */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Events</h2>
          <p className="mb-4">Stay informed about upcoming events and participate in virtual gatherings.</p>

          {/* Event Calendar */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Event Calendar</h3>
            <ul className="list-disc ml-4">
              {events.map((event) => (
                <li key={event.id} className="mb-2">
                  <strong>{event.name}</strong> - {event.date} {event.registered && "(Registered)"}
                </li>
              ))}
            </ul>
          </div>

          {/* My Events */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">My Events</h3>
            <ul className="list-disc ml-4">
              {events.filter(event => event.registered).map((event) => (
                <li key={event.id} className="mb-2">
                  <strong>{event.name}</strong> - {event.date}
                </li>
              ))}
            </ul>
          </div>

          {/* Host an Event */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Host an Event</h3>
            <button onClick={() => setShowEventForm(!showEventForm)} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 mb-4">
              {showEventForm ? "Cancel" : "Host Event"}
            </button>
            {showEventForm && (
              <form onSubmit={handleEventSubmit} className="border rounded-lg p-4 bg-gray-800">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-yellow-400 mb-2">Event Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newEvent.name}
                    onChange={handleEventChange}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="date" className="block text-yellow-400 mb-2">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleEventChange}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                  />
                </div>
                <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Submit Event</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
