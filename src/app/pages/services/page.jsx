"use client";
import React from "react";
import { motion } from "framer-motion";

function page() {
  return (
    <>
      {/* Banner Section */}
      <motion.section
        className="relative text-white text-center py-20 bg-black"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">SERVICES</h1>
          <p className="text-sm mt-2">HOME / SERVICES</p>
          <motion.div
            className="bg-gray-700 mt-8 h-72 w-full rounded-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h5 className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
              Transform Your Everyday
            </h5>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-black leading-snug">
              Let’s Talk Interior Design <br className="hidden lg:block" />
              That Feels Like Home
            </h2>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              From luxurious residential layouts to vibrant commercial spaces,
              we craft interiors that breathe life into your vision. Our
              tailored approach blends aesthetics with practicality—creating
              timeless, functional, and soulfully curated environments.
            </p>
            <motion.button
              className="mt-6 bg-black text-white px-8 py-3 uppercase text-sm font-semibold rounded-md shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              View Our Projects
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/help5.jpeg"
              alt="Interior Design"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Services Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-black">
            Our Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base lg:text-lg">
            With a multidisciplinary team of experts, we provide a full spectrum
            of architectural, interior, and sustainable design services tailored
            to meet the unique vision of each client.
          </p>

          <div className="space-y-14">
            {[
              {
                title: "Architectural Plans",
                subtitle:
                  "Designing with precision and intent to build spaces that are structurally sound and aesthetically striking.",
                bullets: ["Residential", "Commercial"],
              },
              {
                title: "Planning & Designing",
                subtitle:
                  "Strategic space planning and intuitive layouts that merge creativity with functionality.",
                bullets: [
                  "Site Planning – Transforming land into purposeful environments.",
                  "Project Planning – Smart, efficient, and scalable layout strategies.",
                  "Submission & Sanctioning Drawings – Seamless approval documentation.",
                  "Working Drawings – Comprehensive blueprints for flawless execution.",
                ],
              },
              {
                title: "Project Management",
                subtitle:
                  "From concept to completion, we ensure every phase is executed with professionalism and efficiency.",
                bullets: [
                  "3D Animation – Realistic internal and external walkthroughs.",
                  "Landscape & Interior Design – Balanced harmony of nature and space.",
                  "Commercial & Mixed-use Design – Functional and futuristic urban spaces.",
                ],
              },
              {
                title: "Green Building Design",
                subtitle:
                  "We create energy-efficient, eco-conscious structures that prioritize sustainability without compromising on style.",
                bullets: [
                  "Eco-friendly architecture reducing carbon footprint and improving efficiency.",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-yellow-600 mb-1">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-gray-700 text-sm lg:text-base mb-4">
                  {service.subtitle}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm lg:text-base">
                  {service.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Feature Cards */}
      <motion.section
        className="py-20 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "INTERIOR DESIGN",
                description:
                  "We craft innovative, functional, and aesthetic interior concepts tailored to your lifestyle and vision.",
              },
              {
                title: "OFFICE REDESIGN",
                description:
                  "Reimagine your workspace with ergonomic and productivity-boosting designs that foster creativity and collaboration.",
              },
              {
                title: "INTERIOR DECORATION",
                description:
                  "Enhance the ambiance with expert styling, color harmony, and décor that breathes life into every corner.",
              },
              {
                title: "FURNITURE PRODUCTION",
                description:
                  "Custom-crafted furniture that combines quality materials and timeless design to complement your space.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className={`text-center p-6 ${
                  i === 0 ? "bg-black text-white" : "border bg-white text-black"
                } rounded-lg shadow-md`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`/help${i + 1}.jpeg`}
                  alt={service.title}
                  className="mx-auto mb-4 w-12 h-12 object-cover rounded-full shadow-sm"
                />
                <h5 className="font-semibold">{service.title}</h5>
                <p className="text-sm mt-2 text-gray-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="text-yellow-500 font-semibold uppercase">
              Our Services
            </h5>
            <h2 className="text-3xl font-bold mt-2 text-black leading-snug">
              Timeless Design Meets Modern Elegance
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We are dedicated to creating visually captivating and functionally
              efficient interiors. From concept development to execution, our
              team ensures each project reflects your personality while
              enhancing comfort, space, and sophistication.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Whether it's transforming residential spaces or optimizing
              commercial interiors, our approach is rooted in design excellence,
              precision craftsmanship, and a deep understanding of client needs.
            </p>
            <motion.button
              className="mt-6 bg-black text-white px-6 py-3 uppercase font-semibold rounded-md shadow-md hover:bg-yellow-500 hover:text-black transition-all duration-300 w-max"
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Work Process Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Workflow */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h5 className="text-yellow-500 font-semibold">HOW DO WE WORK ?</h5>
            <h2 className="text-3xl font-bold mt-2 text-black">
              WE DESIGN FOR YOUR SATISFACTION
            </h2>
            <p className="text-gray-500 mt-4">
              Our streamlined process ensures transparency, creativity, and
              precision at every stage. We collaborate closely with clients to
              deliver tailored solutions that exceed expectations.
            </p>

            {[
              {
                title: "CONCEPT",
                description:
                  "We start by understanding your vision, gathering requirements, and brainstorming ideas that align with your goals.",
              },
              {
                title: "DESIGN",
                description:
                  "Our creative team transforms concepts into compelling visuals with wireframes, mockups, and prototypes.",
              },
              {
                title: "DEVELOPMENT",
                description:
                  "We bring designs to life using modern technologies, ensuring a seamless, responsive, and optimized user experience.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 py-4 border-b"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-yellow-500 font-bold text-xl">0{i + 1}</h3>
                <div>
                  <h6 className="font-semibold text-black">{step.title}</h6>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Services */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "RESIDENTIAL",
                description:
                  "Elegant and functional designs that turn houses into dream homes with a blend of comfort and style.",
              },
              {
                title: "RESTAURANT",
                description:
                  "We create inviting ambiances and practical layouts that enhance customer experience and brand identity.",
              },
              {
                title: "CORPORATE",
                description:
                  "Smart and professional office spaces designed to boost productivity, collaboration, and company culture.",
              },
              {
                title: "COMMERCIAL",
                description:
                  "Tailored commercial environments built for efficiency, appeal, and brand alignment across industries.",
              },
            ].map((service, i) => (
              <div key={i}>
                <img
                  src="/help1.jpeg"
                  alt={service.title}
                  className="w-full mb-2 rounded-md"
                />
                <div className="shadow-md p-4 text-center rounded-md bg-white">
                  <h6 className="text-yellow-500 font-semibold">
                    {service.title}
                  </h6>
                  <p className="text-sm text-gray-500 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-yellow-500 text-black py-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h4 className="text-sm uppercase tracking-widest font-semibold">
            Let's Build Something Beautiful
          </h4>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug">
            Ready to Revamp <br className="hidden md:block" />
            Your Living or Work Space?
          </h3>
          <p className="mt-4 text-base md:text-lg text-black/80">
            Discover tailored interior solutions that combine form, function,
            and personality.
          </p>
          <motion.button
            className="mt-6 inline-block px-10 py-3 bg-black text-white rounded-full shadow-lg text-sm uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </div>

        {/* Decorative floating circle */}
        <motion.div
          className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-white opacity-20 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[-40px] right-[-40px] w-24 h-24 bg-black opacity-10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </motion.section>
    </>
  );
}

export default page;
