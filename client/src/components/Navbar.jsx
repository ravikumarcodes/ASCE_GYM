import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Auth');
  };

  return (
    <nav className="w-full bg-gray-900 px-4 md:px-44 py-3 flex justify-between items-center relative">
      <div className="text-3xl text-white font-bold cursor-pointer tracking-wider hover:text-red-500">
        <Link to="/">ASCE GYM</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white font-semibold">
        <li className="mx-3"><Link to="/" className="hover:text-red-500">Home</Link></li>
        {token && (
          <>
            <li className="mx-3"><Link to="/Profile" className="hover:text-red-500">Profile</Link></li>
            <li className="mx-3"><Link to="/Dashboard" className="hover:text-red-500">Dashboard</Link></li>
            <li className="mx-3"><Link to="/Membership" className="hover:text-red-500">Membership</Link></li>
          </>
        )}
        <li className="mx-3"><Link to="/Schedule" className="hover:text-red-500">Schedule</Link></li>
        <li className="mx-3"><Link to="/Trainers" className="hover:text-red-500">Trainers</Link></li>
        <li className="mx-3"><Link to="/Pricing" className="hover:text-red-500">Pricing</Link></li>
        <li className="mx-3"><Link to="/Blog" className="hover:text-red-500">Blog</Link></li>
        <li className="mx-3"><Link to="/Contact" className="hover:text-red-500">Contact</Link></li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        {token ? (
          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/Auth"
            className="px-3 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700"
          >
            Login/Signup
          </Link>
        )}
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#8801;
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 text-white text-center font-semibold flex flex-col gap-4 py-6 z-50 md:hidden transition-all duration-300 ease-in-out">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Home</Link></li>
          <li><Link to="/Membership" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Membership</Link></li>
          <li><Link to="/Schedule" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Schedule</Link></li>
          <li><Link to="/Trainers" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Trainers</Link></li>
          <li><Link to="/Pricing" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Pricing</Link></li>
          <li><Link to="/Blog" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Blog</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Contact</Link></li>

          {token ? (
            <>
              <li><Link to="/Profile" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Profile</Link></li>
              <li><Link to="/Dashboard" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Dashboard</Link></li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/Auth"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Login/Signup
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
