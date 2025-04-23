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
    className={` my-10 md:my-20 flex flex-col-reverse md:flex-row items-center gap-12 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">{title}</h2>
      <div className="text-gray-700 text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </div>
    {image && (
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className=" h-[300px] md:h-[600px] object-cover shadow-xl border border-gray-300"
        />
      </div>
    )}
  </motion.section>
);

const Page = () => {
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
          <p className="text-sm mt-2">
            HOME / SERVICES / TAW PLANNING AND DESIGN SERVICE
          </p>
          <motion.div
            className="bg-gray-700 mt-8 h-72 w-full rounded-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>

      <div className="bg-foreground/80 backdrop-blur-3xl px-6 md:px-20 py-16 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-16 text-green-700 text-center"
          >
            Why Choose TAW Designs?
          </motion.h2>

          <Section title="1. Site Planning" image="/help2.jpeg">
            At TAW Designs, we transform raw land into strategically optimized
            spaces through meticulous site planning. We focus on crafting
            intelligent, functional, and visually compelling layouts that align
            with your project’s goals, be it a residential community, commercial
            hub, or mixed-use development.
          </Section>

          <Section title="2. Project Planning" image="/help2.jpeg" reverse>
            With best utilization of residential & commercial spaces, we ensure
            your clients receive spacious carpet areas with efficient and
            thoughtful design. Our project planning maximizes functionality,
            aesthetics, and long-term value.
          </Section>

          <Section
            title="3. Submission & Sanction Drawings"
            image="/help2.jpeg"
          >
            We simplify the sanctioning process for our clients by providing
            precise, regulation-compliant submission drawings. Our streamlined
            approach helps in quick approvals and reduces client workload.
          </Section>

          <Section title="4. Working Drawings" image="/help2.jpeg" reverse>
            Looking for detailed working drawings? TAW Designs provides accurate
            construction-ready plans to ensure your project’s execution is
            immediate and effective.
          </Section>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" text-3xl md:text-5xl font-bold text-green-700 my-10 md:my-20 text-center"
          >
            Core Principles of Green Building
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Energy Efficiency",
                desc: "Smart energy systems that reduce consumption and cut costs.",
                img: "/help2.jpeg",
              },
              {
                title: "Water Conservation",
                desc: "Techniques like rainwater harvesting and low-flow fixtures.",
                img: "/help2.jpeg",
              },
              {
                title: "Sustainable Materials",
                desc: "Locally sourced and eco-friendly materials to lower impact.",
                img: "/help2.jpeg",
              },
              {
                title: "Indoor Air Quality",
                desc: "Better ventilation, natural light, and pollutant control.",
                img: "/help2.jpeg",
              },
              {
                title: "Waste Reduction",
                desc: "Efficient waste management and recycling at every stage.",
                img: "/help2.jpeg",
              },
              {
                title: "Site Sustainability",
                desc: "Low-impact landscaping and minimal disruption to terrain.",
                img: "/help2.jpeg",
              },
              {
                title: "Smart Design",
                desc: "Automated systems for optimal operations and comfort.",
                img: "/help2.jpeg",
              },
            ].map(({ title, desc, img }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 p-6 shadow-md hover:shadow-xl"
              >
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className="h-[300px] md:h-[400px] object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section for Planning & Design */}
      <motion.section
        className="bg-[#D4AF37] text-black py-20 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="text-sm uppercase tracking-widest font-semibold text-[#1F1F1F]">
            Plan With Precision
          </h4>
          <h3 className="text-3xl md:text-5xl font-extrabold mt-3 leading-snug text-black">
            Bring Your Vision to Life <br className="hidden md:block" />
            with TAW Planning & Design Experts
          </h3>
          <p className="mt-4 text-base md:text-lg text-black/80">
            Whether it's residential or commercial, our team creates innovative,
            detail-oriented, and cost-effective design solutions tailored to
            your goals.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <motion.button
              className="px-10 py-3 bg-black text-white rounded-full shadow-lg text-sm uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
            </motion.button>

            <motion.button
              className="px-8 py-3 border border-black text-black rounded-full text-sm uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </div>
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
};

export default Page;
