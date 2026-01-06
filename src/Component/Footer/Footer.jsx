import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Twitter, Mail, ArrowUpCircle } from 'lucide-react';
import { Link } from "react-scroll"; // Using react-scroll for smooth internal navigation

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/ankush-kumar-875079282/", color: "hover:text-blue-500" },
    { icon: Github, url: "https://github.com/ankush-017", color: "hover:text-emerald-500" },
    // { icon: Twitter, url: "#", color: "hover:text-sky-400" },
    { icon: Mail, url: "mailto:ankushkumar1412005@gmail.com", color: "hover:text-rose-500" },
    { icon: Instagram, url: "https://www.instagram.com/ankush_kumar017/", color: "hover:text-pink-500" },
  ];

  return (
    <footer className={`relative py-16 px-6 overflow-hidden transition-colors duration-500 ${darkMode ? "bg-zinc-950 text-white" : "bg-slate-50 text-zinc-900"}`}>

      {/* --- Background Aesthetic --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">

          {/* Branding / Logo Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            {/* Main Title: Clean, Bold, Professional */}
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              <span className="text-emerald-500 group-hover:text-rose-500 transition-colors duration-300">&lt;</span>
              ANKUSH <span className="text-rose-500 font-bold">KUMAR</span>
              <span className="text-emerald-500 group-hover:text-rose-500 transition-colors duration-300">/&gt;</span>
            </h2>

            {/* SDE Specific Subtitle: Using a "Terminal" style decoration */}
            <div className="flex items-center justify-center gap-3">
              <div className={`h-[1px] w-8 ${darkMode ? "bg-zinc-800" : "bg-zinc-300"}`} />
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.3em] text-emerald-500">
                Software Development Engineer
              </p>
              <div className={`h-[1px] w-8 ${darkMode ? "bg-zinc-800" : "bg-zinc-300"}`} />
            </div>

            {/* Domain Focus Tags */}
            <p className={`mt-3 text-[10px] font-bold opacity-60 uppercase tracking-widest ${darkMode ? "text-zinc-100" : "text-zinc-600"}`}>
              Distributed Systems • Scalable Architecture • Problem Solving
            </p>
          </motion.div>

          {/* Navigation Links */}
          <nav className={`flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 p-2 px-8 rounded-2xl border ${darkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-white/50 border-zinc-200 shadow-sm"} backdrop-blur-md`}>
            {['About', 'Projects', 'Contact', 'Experience'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="text-sm font-bold uppercase tracking-wider hover:text-emerald-500 transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social Icons with Magnetic Effect */}
          <div className="flex space-x-4 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-2xl border transition-all duration-300 ${social.color} ${darkMode
                    ? "bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50"
                    : "bg-white border-zinc-200 shadow-sm hover:border-emerald-500/50"
                  }`}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-500/10 gap-6">
            <p className="text-xs font-medium opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Designed & Built by
              <span className={`ml-1 font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}>Ankush Kumar</span>
            </p>

            <button
              onClick={scrollToTop}
              className={`group flex items-center gap-2 text-xs font-black tracking-widest uppercase py-2 px-4 rounded-lg transition-all ${darkMode ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"
                }`}
            >
              Back to Top
              <ArrowUpCircle size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4 text-xs font-mono opacity-50">
              <span>React</span>
              <span>•</span>
              <span>Tailwind</span>
              <span>•</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;