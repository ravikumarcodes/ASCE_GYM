import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUserCircle, FaEnvelope, FaTachometerAlt } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/Auth");
};

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/Auth");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/protected/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        navigate("/Auth");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-red-100 to-red-300">
        <p className="text-lg text-red-700 animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-red-700 mb-8 flex items-center gap-3">
            <FaTachometerAlt className="text-red-500" /> Welcome back, {user.name}!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
              <FaUserCircle className="text-red-500 text-9xl mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-4">Member since: <span className="font-medium">2024</span></p>
              <Link
                to="/profile"
                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                View Profile
              </Link>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
              <FaEnvelope className="text-red-500 text-7xl mb-4" />
              <h3 className="text-xl font-semibold mb-1">Email Address</h3>
              <p className="text-gray-700 break-words text-center">{user.email}</p>
            </div>

            {/* Quick Links or Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Quick Links</h3>
              <ul className="space-y-3 text-red-700 font-medium">
                <li>
                  <Link
                    to="/membership"
                    className="hover:underline hover:text-red-600"
                  >
                    Membership Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="hover:underline hover:text-red-600"
                  >
                    Account Settings
                  </Link>
                </li>
                <li>
                  <Link
                     to="/Auth"
                     onClick={handleLogout}
                     className="hover:underline hover:text-red-600 focus:outline-none"
                     >
                      Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
