import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 md:px-24 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} ASCE Gym. All rights reserved.</p>
      <p className="text-xs mt-2">Made with passion and purpose by Team ASCE.</p>
    </footer>
  );
};

export default Footer;
