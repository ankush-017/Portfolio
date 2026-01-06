import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, PhoneCall, User, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Mobile: "",
    Message: "",
  });

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    emailjs
      .send(
        "service_0pt1fe7",
        "template_xxbeaw9",
        {
          name: formData.name,
          email: formData.email,
          Mobile: formData.Mobile,
          Message: formData.Message,
          reply_to: formData.email,
        },
        "LmH2MNookk_hMzo8L"
      )
      .then(
        () => {
          setMessage({
            type: "success",
            text: "Message sent! I'll get back to you shortly.",
          });
          setFormData({ name: "", email: "", Mobile: "", Message: "" });
        },
        () => {
          setMessage({
            type: "error",
            text: "Engine failure! Please try again later.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className={`min-h-screen pt-24 pb-12 px-6 flex items-center justify-center transition-colors duration-500 ${darkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-zinc-900"}`}>

      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative w-full max-w-5xl flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden border ${darkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-zinc-200 shadow-2xl"} backdrop-blur-xl`}
      >
        {/* --- Left Info Panel (Emerald Gradient) --- */}
        <div className={`md:w-1/3 p-10 flex flex-col justify-between relative overflow-hidden ${darkMode ? "bg-zinc-900/50" : "bg-emerald-600 text-white"}`}>

          {/* Subtly animated background grid for 'Engineer' feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black tracking-tighter mb-4 leading-tight">
                Let's Build <br />
                <span className={darkMode ? "text-emerald-500" : "text-emerald-200"}>Scalable</span> Systems.
              </h2>
              <p className={`text-sm leading-relaxed mb-10 opacity-80 ${darkMode ? "text-zinc-400" : "text-emerald-50"}`}>
                Open for discussions on <span className="font-bold underline decoration-rose-500/50">Full-stack architectures</span>, distributed systems, or freelance engineering opportunities.
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* 1. Email with 'Copy' functionality idea */}
              <div className="group flex items-center gap-4 cursor-pointer">
                <div className={`p-3 rounded-xl transition-all duration-300 ${darkMode ? "bg-zinc-800 group-hover:bg-emerald-500/20" : "bg-emerald-500"}`}>
                  <Mail size={20} className={darkMode ? "text-emerald-400" : "text-white"} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-black">Email</p>
                  <p className="text-sm font-bold hover:text-emerald-500 transition-colors">ak4001493@gmail.com</p>
                </div>
              </div>

              {/* 2. Availability with Timezone context - High value for Recruiters */}
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${darkMode ? "bg-zinc-800" : "bg-emerald-500"}`}>
                  <PhoneCall size={20} className={darkMode ? "text-rose-400" : "text-white"} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-black">Availability</p>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <p className="text-sm font-bold tracking-tight">
                    Fast Response <span className="mx-1 opacity-30">•</span> IST (UTC +5:30)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer of the panel: Meta information for SDE roles */}
          <div className={`mt-12 pt-8 border-t space-y-4 ${darkMode ? "border-zinc-800" : "border-emerald-500/50"}`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest opacity-40 uppercase">Location</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">India / Remote</span>
            </div>

            {/* Visual 'Uptime' Bar - Very impressive for viewers */}
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "99.9%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-emerald-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono opacity-30 uppercase tracking-tighter">System Uptime</span>
              <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-tighter">99.9% Reliable</span>
            </div>
          </div>
        </div>

        {/* --- Right Form Panel --- */}
        <div className="flex-1 p-8 md:p-12">
          <form onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Name Input */}
            <div className="relative col-span-2 sm:col-span-1">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 mb-2 block opacity-50">Identity</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ankush Kumar"
                  required
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${darkMode ? "bg-zinc-800/50 border-zinc-800 focus:border-emerald-500/50 focus:bg-zinc-800" : "bg-gray-50 border-gray-100 focus:border-emerald-500 focus:bg-white text-zinc-900"}`}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative col-span-2 sm:col-span-1">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 mb-2 block opacity-50">Digital Mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="xyz@example.com"
                  required
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${darkMode ? "bg-zinc-800/50 border-zinc-800 focus:border-rose-500/50 focus:bg-zinc-800" : "bg-gray-50 border-gray-100 focus:border-rose-500 focus:bg-white text-zinc-900"}`}
                />
              </div>
            </div>

            {/* Mobile Input */}
            <div className="relative col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 mb-2 block opacity-50">Contact Line</label>
              <div className="relative">
                <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                <input
                  type="tel"
                  name="Mobile"
                  value={formData.Mobile}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${darkMode ? "bg-zinc-800/50 border-zinc-800 focus:border-emerald-500/50 focus:bg-zinc-800" : "bg-gray-50 border-gray-100 focus:border-emerald-500 focus:bg-white text-zinc-900"}`}
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="relative col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 mb-2 block opacity-50">The Brief</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-rose-500" size={18} />
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Describe your project or query..."
                  required
                  className={`w-full pl-12 pr-4 pt-4 h-32 rounded-xl border-2 transition-all outline-none resize-none ${darkMode ? "bg-zinc-800/50 border-zinc-800 focus:border-rose-500/50 focus:bg-zinc-800" : "bg-gray-50 border-gray-100 focus:border-rose-500 focus:bg-white text-zinc-900"}`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex flex-col items-center gap-4 mt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`group w-full py-4 rounded-2xl font-black tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 ${loading
                  ? "bg-rose-500 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/40"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              <AnimatePresence>
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-2 text-sm font-bold ${message.type === "success" ? "text-emerald-500" : "text-rose-500"}`}
                  >
                    {message.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    {message.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}