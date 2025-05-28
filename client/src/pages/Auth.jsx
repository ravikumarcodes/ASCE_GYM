import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await axios.post(endpoint, formData);
      console.log("Response:", response.data);

      if (isLogin) {
        localStorage.setItem("token", response.data.token);
        navigate("/Dashboard");
      } else {
        alert("Signup successful. Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-800 to-gray-700">
        <div className="bg-white p-16 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            {isLogin ? "Login to ASCE GYM" : "Signup for ASCE GYM"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-700">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <span
              className="text-red-600 font-semibold cursor-pointer"
              onClick={toggleForm}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
