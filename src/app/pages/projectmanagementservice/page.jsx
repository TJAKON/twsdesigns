"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable Section component
const Section = ({ title, children, image, reverse }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`my-20 flex flex-col-reverse md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } gap-12 items-center`}
  >
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">{title}</h2>
      <div className="text-[#F8F8F8] text-lg leading-relaxed">{children}</div>
    </div>
    {image && (
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={200}
          className=" h-[600px] object-cover shadow-xl border border-[#C0C0C0]"
        />
      </div>
    )}
  </motion.section>
);

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative text-[#F8F8F8] text-center py-20"
        style={{ backgroundColor: "#0A0A0A" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-[#D4AF37]">SERVICES</h1>
          <p className="text-sm mt-2 text-[#F8F8F8]">
            HOME / SERVICES / TAW PROJECT MANAGEMENT SERVICE
          </p>
          <motion.div
            className="mt-8 h-72 w-full rounded-lg"
            style={{ backgroundColor: "#1F1F1F" }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>

      {/* Main Content Section */}
      <div
        className="px-6 md:px-20 md:py-12"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div className="max-w-7xl mx-auto font-geist-sans">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-3xl md:text-5xl font-extrabold mb-12 text-[#D4AF37] text-center"
          >
            Project Management Services
          </motion.h1>

          <Section
            title="Why TAW Designs for Project Management?"
            image="/help1.jpeg"
          >
            With a team of experienced engineers and architects, TAW Designs
            Pvt. Ltd. provides{" "}
            <strong>end-to-end project management solutions</strong> to builders
            across Pune, Mumbai, and Maharashtra. From planning to handover, we
            ensure smooth project execution through{" "}
            <strong>technical drawings, consultant coordination</strong>, and
            regulatory compliance.
          </Section>

          <Section title="Services We Offer" image="/help1.jpeg" reverse>
            <ul className="list-disc list-inside space-y-2 text-[#F8F8F8] text-lg">
              <li>📌 Project Execution</li>
              <li>
                📌 Coordination with Structural, HVAC, MEP & Green Consultants
              </li>
              <li>📌 Acquiring Planning & Working Drawings</li>
              <li>📌 Complete Support for Final Handover</li>
              <li>📌 3D Animation – Internal & External</li>
              <li>📌 Landscape & Interior Design</li>
              <li>📌 Commercial & Mixed-Use Architecture</li>
            </ul>
          </Section>

          <Section
            title="Our Approach to Sustainable & Compliant Development"
            image="/help1.jpeg"
          >
            We specialize in delivering{" "}
            <strong>timely and economical construction solutions</strong> with a
            focus on <strong>building norms and sustainability</strong>. Our
            expertise guarantees streamlined development, technical accuracy,
            and high client satisfaction.
          </Section>
        </div>
      </div>
      {/* CTA Section */}
      <motion.section
        className="bg-[#D4AF37] text-black py-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h4 className="text-sm uppercase tracking-widest font-semibold text-[#1F1F1F]">
            Let’s Build Together
          </h4>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug text-black">
            Need Expert Project Management? <br className="hidden md:block" />
            Let TAW Designs Handle It.
          </h3>
          <p className="mt-4 text-base md:text-lg text-black/80">
            From execution to final handover, our expert team ensures technical
            precision, consultant coordination, and on-time delivery.
          </p>
          <motion.button
            className="mt-6 inline-block px-10 py-3 bg-black text-white rounded-full shadow-lg text-sm uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch with Us
          </motion.button>
        </div>

        {/* Floating Circle Top Left */}
        <motion.div
          className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-white opacity-20 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Floating Circle Bottom Right */}
        <motion.div
          className="absolute bottom-[-40px] right-[-40px] w-24 h-24 bg-black opacity-10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </motion.section>
    </>
  );
}
