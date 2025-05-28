import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Optional if you want Navbar here too
import Footer from '../components/Footer';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/Auth");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/protected/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUserData(data.user || data);
        } else {
          setError(data.message || "Unauthorized");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching profile");
      }
    };

    fetchProfile();
  }, [navigate]);


  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold text-lg">
        {error}
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <>
       <Navbar /> 
      <div className="p-13 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4 relative mt-4">

        {/* Profile Header */}
        <div className="text-center">
          <img
            src="/src/Images/profile1.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-2 border"
          />
          <h2 className="text-3xl font-bold mb-1">👋 Welcome, {userData.name || userData.id}</h2>
          <p className="text-gray-500">📧 {userData.email || "Not Available"}</p>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🎯 Fitness Goal</h3>
            <p>Gain muscle and stay consistent.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📊 BMI</h3>
            <p>22.5 (Normal)</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📅 Weekly Progress</h3>
            <ul className="space-y-1">
              <li className="flex justify-between border-b pb-2"><span>🧘‍♂️ Yoga</span> <span>3 sessions</span></li>
              <li className="flex justify-between border-b pb-2"><span>🏃‍♀️ Cardio</span> <span>5 sessions</span></li>
              <li className="flex justify-between"><span>🏋️‍♀️ Weight Training</span> <span>4 sessions</span></li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💳 Membership</h3>
            <p>Active until 31 Dec 2025</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
