"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Section = ({ title, children, image, reverse }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={` my-10 md:my-20 flex flex-col-reverse md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } gap-12 items-center`}
  >
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-green-700 mb-4">{title}</h2>
      <div className="text-gray-600 text-lg leading-relaxed">{children}</div>
    </div>
    {image && (
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className=" h-[300px] md:h-[600px] object-cover shadow-xl border border-gray-200"
        />
      </div>
    )}
  </motion.section>
);

export default function Page() {
  return (
    <>
      <motion.section
        className="relative text-white text-center py-20 bg-black"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">SERVICES</h1>
          <p className="text-sm mt-2">HOME / SERVICES / TAW GREENS</p>
          <motion.div
            className="bg-gray-700 mt-8 h-72 w-full rounded-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>

      <div className="bg-white text-gray-900 px-5 md:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-4xl md:text-5xl font-extrabold mb-0 md:mb-12 text-green-700 text-center"
          >
            Green Building Design
          </motion.h1>

          {/* Sections */}
          <Section
            title="Introduction to Green Building Concept"
            image="/help1.jpeg"
          >
            The design, construction, and operation of environmentally conscious
            and resource-efficient structures are referred to as the{" "}
            <strong>"green building concept."</strong> It focuses on lowering
            energy and water use, decreasing environmental impact, and enhancing
            indoor air quality to provide healthier, more sustainable living and
            working environments.
          </Section>

          <Section title="Why TAW Designs?" image="/help1.jpeg" reverse>
            TAW Designs Pvt. Ltd. is one of the leading green architecture firms
            in Pune and Mumbai, supporting the Green Building Concept by
            designing environmentally responsible, energy-efficient, and
            sustainable environments. Our projects span across Maharashtra
            including <strong>Nagpur, Nashik, and Aurangabad</strong> and
            include mixed-use, residential, and commercial buildings. We
            prioritize{" "}
            <strong>IGBC/GRIHA compliance, sustainable materials,</strong> and{" "}
            <strong>water conservation</strong> to deliver affordable,
            eco-friendly designs.
          </Section>

          <Section title="Benefits of Green Buildings" image="/help1.jpeg">
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Lower operating costs (energy & water savings)</li>
              <li>Healthier living/working spaces (better air quality)</li>
              <li>Reduced carbon footprint (lower greenhouse gas emissions)</li>
              <li>Higher property value & market demand</li>
              <li>Compliance with environmental regulations</li>
            </ul>
          </Section>

          {/* Key Principles Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" text-3xl md:text-4xl font-bold text-green-700 my-16 text-center"
          >
            Key Principles of Green Building
          </motion.h2>

          {/* Principles Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Energy Efficiency",
                desc: "Implementing smart technologies and systems into the design of energy-efficient buildings to cut down on energy use and operating expenses.",
                img: "/help1.jpeg",
              },
              {
                title: "Water Conservation",
                desc: "Water-saving measures like rainwater harvesting and low-flow fixtures promote sustainable living.",
                img: "/help1.jpeg",
              },
              {
                title: "Sustainable Materials",
                desc: "Use of locally produced, recycled, and renewable building materials to reduce environmental impact.",
                img: "/help1.jpeg",
              },
              {
                title: "Indoor Environmental Quality (IEQ)",
                desc: "Ventilation systems, natural lighting, and air quality improvements create healthier living spaces.",
                img: "/help1.jpeg",
              },
              {
                title: "Waste Reduction & Recycling",
                desc: "Implementing construction waste management and recycling practices to reduce landfill load.",
                img: "/help1.jpeg",
              },
              {
                title: "Site Sustainability",
                desc: "Structures that blend with the landscape, support native planting, and minimize land disturbance.",
                img: "/help1.jpeg",
              },
              {
                title: "Smart Building Design",
                desc: "Automation and smart energy systems ensure efficient building operations.",
                img: "/help1.jpeg",
              },
            ].map(({ title, desc, img }) => (
              <motion.div
                key={title}
                className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className=" h-[300px] md:h-[450px] object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section for Green Design Page */}
      <motion.section
        className="bg-[#D4AF37] text-black py-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h4 className="text-sm uppercase tracking-widest font-semibold text-[#1F1F1F]">
            Building the Future, Sustainably
          </h4>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug text-black">
            Inspired by Nature. Designed for Tomorrow.{" "}
            <br className="hidden md:block" />
            Partner with TAW for Eco-Friendly Spaces.
          </h3>
          <p className="mt-4 text-base md:text-lg text-black/80">
            We create conscious interiors using sustainable materials, smart
            energy practices, and biophilic design to minimize environmental
            impact while maximizing comfort and beauty.
          </p>
          <motion.button
            className="mt-6 inline-block px-10 py-3 bg-black text-white rounded-full shadow-lg text-sm uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Green Journey
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
