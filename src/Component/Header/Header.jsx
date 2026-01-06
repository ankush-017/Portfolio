import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Coding Profile", path: "/codingprofile" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  const activeGreen = darkMode ? "text-emerald-400" : "text-emerald-600";
  const hoverStyles = darkMode
    ? "hover:text-rose-400 hover:bg-rose-500/10"
    : "hover:text-rose-600 hover:bg-rose-100/80";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${scrolled
          ? `${darkMode ? "bg-zinc-950/90" : "bg-white/95"} backdrop-blur-md border-b ${darkMode ? "border-emerald-500/20" : "border-emerald-600/10"}`
          : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* logo area */}
          <Link to="/" className="group flex items-center font-mono text-2xl md:text-3xl tracking-tighter">
            <span className="text-emerald-500 group-hover:text-rose-500 transition-colors duration-300">&lt;</span>
            <span className={`px-1 font-bold ${darkMode ? "text-zinc-100" : "text-zinc-800"}`}>
              Ankush
              <span className="text-rose-500 group-hover:text-emerald-500 transition-colors duration-300">Kumar</span>
            </span>
            <span className="text-emerald-500 group-hover:text-rose-500 transition-colors duration-300">/&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-bold transition-all duration-300 rounded-lg ${isActive
                        ? `${activeGreen} ${darkMode ? "bg-emerald-500/20" : "bg-emerald-100"}`
                        : `${darkMode ? "text-zinc-200" : "text-zinc-700"} ${hoverStyles}`
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={`h-5 w-[1px] ${darkMode ? "bg-zinc-200" : "bg-zinc-700"}`} />
            <div className="pl-2"><Toggle /></div>
          </div>

          {/* Mobile UI Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Toggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-all active:scale-90 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
            >
              <FaBars size={30} />
            </button>
          </div>
        </nav>
      </header>

      {/* Dark Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Side Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] z-[110] transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } ${darkMode ? "bg-zinc-950 border-l border-zinc-800" : "bg-white border-l border-zinc-100"}`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-6 flex justify-between items-center border-b border-zinc-500/10">
            <Link to="/" className="group flex items-center font-mono text-xl md:text-3xl tracking-tighter">
              <span className="text-emerald-500 group-hover:text-rose-500 transition-colors duration-300">&lt;</span>
              <span className={`px-1 font-bold ${darkMode ? "text-zinc-100" : "text-zinc-800"}`}>
                Ankush
                <span className="text-rose-500 group-hover:text-emerald-500 transition-colors duration-300">Kumar</span>
              </span>
              <span className="text-emerald-500 group-hover:text-rose-500 transition-colors duration-300">/&gt;</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-rose-500 p-2">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 text-base font-bold rounded-xl transition-all ${isActive
                      ? `${activeGreen} ${darkMode ? "bg-emerald-500/10" : "bg-emerald-50"}`
                      : `${darkMode ? "text-zinc-300" : "text-zinc-600"} active:bg-zinc-100 dark:active:bg-zinc-900`
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Menu Footer */}
          <div className="mt-auto p-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <p className={`text-[10px] font-mono tracking-widest uppercase opacity-40 ${darkMode ? "text-white" : "text-black"}`}>
              Portfolio © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;