"use client";

import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace
        "your_template_id", // replace
        form.current,
        "your_public_key" // replace
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Failed to send message. Please try again.");
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
          <p className="text-sm mt-2">HOME / CONTACT Us</p>
          <div className=" mt-8 h-72 w-full overflow-hidden">
            <img
              src={"/images/top-view-work-desk-with-laptop-blueprints.jpg"}
              alt={"test"}
              className=" w-full h-[300px] md:h-[600px] object-cover "
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <div className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Text Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white">Let’s Connect</h2>
            <p className="text-lg text-white/90">
              We’d love to collaborate with you on your next project...
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

          {/* Form Section */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent bg-white text-black"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Subject
              </label>
              <select
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent bg-white text-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Architecture Design">Architecture Design</option>
                <option value="Interior Design">Planning and Desiging</option>
                <option value="Project Management">Project Management</option>
                <option value="Turnkey Solutions">Green Building Design</option>
                <option value="Consultation Services">
                  Consultation service{" "}
                </option>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent bg-white text-black"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-accent/90 text-white font-semibold py-3 rounded-xl hover:bg-accent transition"
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
