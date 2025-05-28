import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogs = [
  {
    id: 1,
    title: "Top 5 Exercises to Build Muscle Fast",
    summary: "Discover the most effective workouts for rapid muscle gain and gym performance.",
    image: "/src/Images/Blog1.jpg",
    date: "May 15, 2025",
    author: "Coach Anil"
  },
  {
    id: 2,
    title: "Nutrition Tips for Gym Beginners",
    summary: "A guide to help beginners eat right for strength, stamina, and recovery.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    date: "May 20, 2025",
    author: "Dietician Riya"
  },
  {
    id: 3,
    title: "How to Stay Consistent with Workouts",
    summary: "Practical motivation and habit-building tips to stay on track at ASCE Gym.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    date: "May 22, 2025",
    author: "Coach Rohan"
  }
];

const Blog = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gradient-to-br from-white via-gray-800 to-gray-700 min-h-screen px-4 py-10 sm:px-6 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Fitness Blog</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                By {blog.author} | {blog.date}
              </p>
              <p className="text-gray-600 text-sm mb-4">{blog.summary}</p>
              <button className="text-red-600 font-semibold hover:underline cursor-pointer">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-white mb-4">Want to share your story?</h2>
        <p className="text-white mb-4">Write to us and get featured in the ASCE Gym blog!</p>
        <a
          href="/Contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blog;
