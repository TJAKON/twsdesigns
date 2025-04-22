"use client";
import React from "react";
import { motion } from "framer-motion";

function page() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative text-white text-center py-40 bg-black"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-sm mt-3 text-indigo-100 tracking-wide">HOME / CONTACT US</p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Text Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">Let’s Connect</h2>
            <p className="text-lg text-gray-600">
              We’d love to collaborate with you on your next project. Whether you need
              interior design expertise, space planning, or custom furniture production,
              our team at TAW Designs is here to bring your vision to life. Reach out to us today,
              and let’s create something amazing together.
            </p>
            <div className="mt-8 space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl">📞</span>
                <strong>Phone:</strong> +91 9876543210
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl">📧</span>
                <strong>Email:</strong> info@tawdesigns.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl">📍</span>
                <strong>Address:</strong> Pune, Maharashtra, India
              </p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            className="bg-gray-100 p-8 rounded-3xl shadow-lg space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.03 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default page;
