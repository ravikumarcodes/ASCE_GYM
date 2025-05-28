import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Trainers" element={<Trainers />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/ProtectedRoute" element={<ProtectedRoute />} />

      <Route
        path="/Dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

       <Route
        path="/Membership"
        element={
          <ProtectedRoute>
            <Membership />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
