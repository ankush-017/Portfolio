import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Coding Profile", path: "/codingprofile" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Header Bar */}
      <header className={`shadow fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-10 ${darkMode ? "bg-black text-gray-200" : "bg-white text-gray-700"}`}>
        <nav className={`px-4 flex flex-wrap ${darkMode ? "bg-black shadow-lg shadow-white" : "bg-white shadow-lg shadow-black"} justify-between items-center py-3`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold">{`<`}Ankush</span>
            <span className="text-2xl md:text-3xl font-bold">Kumar {`/>`}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="items-center gap-6 hidden md:flex">
            <ul className="flex gap-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded-md duration-200 ${
                        isActive
                          ? `${darkMode ? "text-green-300" : "text-green-700"} font-semibold`
                          : `${darkMode ? "text-white" : "text-black"}`
                      } hover:text-orange-700`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Toggle />
          </div>

          {/* Mobile Nav Icon */}
          <div className="md:hidden flex gap-4 items-center">
            <Toggle />
            <button onClick={() => setMobileMenuOpen(true)} className="text-[26px]">
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed top-0 left-0 w-full h-full z-[100] backdrop-blur-md ${darkMode ? "bg-black/80 text-white" : "bg-white/90 text-black"} transition duration-300`}>
          <div className="flex justify-end p-5">
            <button onClick={() => setMobileMenuOpen(false)} className="text-3xl hover:text-red-400">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-[80%] gap-10 text-2xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded transition-all duration-200 ${
                      isActive
                        ? "text-orange-500 underline underline-offset-4"
                        : "hover:text-pink-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;