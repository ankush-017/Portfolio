import { Instagram } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-yellow-700 text-white py-10 px-6 relative overflow-hidden shadow-2xl">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full opacity-20 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="https://www.linkedin.com/in/ankush-kumar-875079282/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} className="hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://github.com/ankush-017" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} className="hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={24} className="hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="mailto:ak4001493@gmail.com" aria-label="Email">
            <FaEnvelope size={24} className="hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={24} className="hover:text-yellow-300 transition duration-300" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 font-semibold text-sm md:text-base">
          <Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
          <Link to="/project" className="hover:text-yellow-300 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
          <Link to="/codingprofile" className="hover:text-yellow-300 transition duration-300">Coding Profile</Link>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/20" />

        {/* Copyright */}
        <p className="text-sm text-center text-white/80 font-medium">
          © {new Date().getFullYear()} <span className="text-yellow-300">Ankush Kumar</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;