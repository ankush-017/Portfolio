import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Mail, PhoneCall, User, MessageSquare } from "lucide-react";

export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Mobile: "",
    Message: "",
  });

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
        (result) => {
          setMessage({
            type: "success",
            text: "Thanks for reaching out! We'll respond via email shortly.",
          });
          setFormData({ name: "", email: "", Mobile: "", Message: "" });
        },
        (error) => {
          setMessage({
            type: "error",
            text: "Oops! Something went wrong. Please try again later.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`min-h-screen pt-32 px-6 py-11 flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-4xl p-10 rounded-2xl shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Let's <span className="text-blue-600">Connect</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          We’d love to help. Fill in your details and we’ll be in touch.
        </p>

        <form onSubmit={sendEmail} className="grid gap-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`pl-12 w-full py-3 rounded-lg bg-gray-100  border border-gray-300  focus:ring-2 focus:ring-blue-500 outline-none ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"}`}
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={`${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"} pl-12 w-full py-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none`}
            />
          </div>
          <div className="relative">
            <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
            <input
              type="tel"
              name="Mobile"
              value={formData.Mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className={`pl-12 w-full py-3 rounded-lg bg-gray-100 border border-gray-300 ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"} focus:ring-2 focus:ring-blue-500 outline-none`}
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-blue-500" />
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className={`pl-12 pt-3 w-full h-32 ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"} rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center font-medium ${message.type === "success" ? "text-green-500" : "text-red-500"}`}
            >
              {message.text}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
}