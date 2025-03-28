import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";

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
        "service_0pt1fe7", // Your EmailJS service ID
        "template_xxbeaw9", // Your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          Mobile: formData.Mobile,
          Message: formData.Message,
          reply_to: formData.email, // Ensuring the user gets a response
        },
        "LmH2MNookk_hMzo8L" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessage({ type: "success", text: "Thanks for contacting us! Check your email for a response." });
          setFormData({ name: "", email: "", Mobile: "", Message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setMessage({ type: "error", text: "Failed to send email. Please try again later." });
        }
      )
      .finally(() => setLoading(false));
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`min-h-screen flex items-center justify-center pt-20 px-5 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className={`max-w-4xl w-full p-8  ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-800"} shadow-lg rounded-lg`}>
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center mb-6">
          We'd love to hear from you! Fill out the form and we'll get back to you soon.
        </p>
        <form onSubmit={sendEmail} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500   ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 border-gray-700 text-gray-800"} `}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500   ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 border-gray-700 text-gray-800"} `}
          />
          <input
            type="tel"
            name="Mobile"
            placeholder="Phone Number"
            value={formData.Mobile}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500   ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 border-gray-700 text-gray-800"} `}
            
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            value={formData.Message}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500   ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 border-gray-700 text-gray-800"} `}
            
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center font-semibold ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}