import { Instagram } from 'lucide-react';
import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-green-600'>
      <footer className="bg-yellow-600 text-white py-8 rounded-t-[100px]">
        <div className="container mx-auto px-4">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/ankush-kumar-875079282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ankush-017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000] hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000] hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:mailto:ak4001493@gmail.com"
              className="text-black hover:text-white transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="/about" className="text-[#ffffff] font-semibold hover:text-black transition duration-300">
              About
            </Link>
            <Link to="/project" className="text-[#ffffff] font-semibold hover:text-blacktransition duration-300">
              Projects
            </Link>
            <Link to="/contact" className="text-[#ffffff] font-semibold hover:text-black transition duration-300">
              Contact
            </Link>
            <Link to="/codingprofile" className="text-[#ffffff] font-semibold hover:text-black transition duration-300">
              Coding Profile
            </Link>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-[#38146f] font-semibold">
            © {new Date().getFullYear()} Ankush Kumar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;