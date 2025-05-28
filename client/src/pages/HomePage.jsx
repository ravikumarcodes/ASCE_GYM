import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage = () => (
  <div className="h-screen bg-black">
    <Navbar />
    <HeroSection />
    <Testimonials />
    <About/>
    <Footer />
  </div>
);

export default HomePage;
