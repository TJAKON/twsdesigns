"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Page() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const validateForm = (data) => {
    const { from_name, from_email, phone, subject, message } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // basic 10-digit phone validation

    if (!from_name.trim() || !from_email.trim() || !phone.trim() || !subject.trim() || !message.trim()) {
      alert("Please fill out all fields.");
      return false;
    }

    if (!emailRegex.test(from_email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    if (!validateForm(data)) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_3wk43r3",
        "template_ufk60dg",
        form.current,
        "--YWdlLYSsy0lrkJ_"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("✅ Message sent successfully! We will get back to you shortly.");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative text-white text-center py-20 bg-black border-b"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-sm mt-2">HOME / CONTACT US</p>
          <div className="mt-8 h-72 w-full overflow-hidden">
            <img
              src="/images/top-view-work-desk-with-laptop-blueprints.jpg"
              alt="Work desk"
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <div className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white">Let’s Connect</h2>
            <p className="text-lg text-white/90">
              We’d love to collaborate with you on your next project. Reach out and let's talk.
            </p>
            <div className="mt-8 space-y-4 text-white">
              <p className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl">📞</span>
                <strong>Phone:</strong> +91 7507099004
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl">📧</span>
                <strong>Email:</strong> taw.architecture@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl">📍</span>
                <strong>Address:</strong> Pune, Maharashtra, India
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-black p-8 rounded-3xl shadow-lg space-y-6 border"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Subject
              </label>
              <select
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>Select a subject</option>
                <option value="Architecture Design">Architecture Design</option>
                <option value="Planning and Designing">Planning and Designing</option>
                <option value="Green Building Design">Green Building Design</option>
                <option value="Project Management">Project Management</option>
                <option value="Consultation Services">Consultation Services</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-3 rounded-xl transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-accent/90 hover:bg-accent"
              }`}
              whileHover={!loading ? { scale: 1.03 } : {}}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Page;
