"use client";
import React from "react";
import Image from "next/image";
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
              let's Talk Architectural Design <br className="hidden lg:block" />
              Tailored to Your Lifestyle
            </h2>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              At TAW Designs, we specialize in crafting cohesive and inspiring
              spaces across Residential, Commercial, and Hospitality sectors.
              Whether it’s a dream home, a smart workspace, or a welcoming
              café—our design language adapts to your story. We handle it all:
              3D visualizations, modular solutions, site supervision, and
              end-to-end turnkey execution. Our commitment to quality and
              innovation ensures that every project is a masterpiece, reflecting
              your unique vision and lifestyle.
            </p>
            <motion.button
              className="mt-6 bg-black text-white px-8 py-3 uppercase text-sm font-semibold rounded-md shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/help5.jpeg"
              alt="Interior Design"
              width={600}
              height={0}
              className="w-full h-[500px] rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Feature Cards */}
      <motion.section
        className="py-20 bg-[#0A0A0A] text-[#F8F8F8]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-[#F8F8F8]">
            Our Services
          </h2>
          <p className="text-center text-[#C0C0C0] max-w-2xl mx-auto mb-12 text-base lg:text-lg">
            We offer bespoke interior and architectural services across
            Residential, Commercial, and Hospitality sectors. From vision to
            execution, TAW Designs is your partner in creating timeless,
            functional, and emotionally resonant spaces.
          </p>

          <div className="space-y-14">
            {[
              {
                title: "Architectural Plans",
                subtitle:
                  "We provide detailed architectural plans for various project types, ensuring functional and aesthetic excellence.",
                bullets: ["Residential", "Commercial"],
              },
              {
                title: "Planning & Designing",
                subtitle:
                  "From site planning to working drawings, our experts provide comprehensive planning services to ensure smooth execution.",
                bullets: [
                  "Site Planning",
                  "Project Planning",
                  "Submission & Sanction Drawings",
                  "Working Drawings",
                ],
              },
              {
                title: "Project Management",
                subtitle:
                  "With expert coordination and technical assistance, we manage all aspects of your project, ensuring timely and efficient execution.",
                bullets: [
                  "Project Execution",
                  "Coordination with Consultants",
                  "Acquiring Planning & Working Drawings",
                  "Full Project Handover Support",
                ],
              },
              {
                title: "3D Animation & Visualization",
                subtitle:
                  "Bring your designs to life with realistic 3D animations and visualizations for both interior and exterior spaces.",
                bullets: [
                  "3D Exterior & Interior Animation",
                  "Virtual Reality Integration",
                  "Architectural Animation",
                ],
              },
              {
                title: "Green Building Design",
                subtitle:
                  "We design eco-friendly, sustainable buildings that enhance your space's environmental impact while offering long-term savings.",
                bullets: [
                  "Energy Efficiency",
                  "Water Conservation",
                  "Sustainable Materials",
                  "Indoor Environmental Quality (IEQ)",
                  "Waste Reduction & Recycling",
                  "Site Sustainability",
                  "Smart Building Design",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1F1F1F] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-[#D4AF37] mb-1">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-[#C0C0C0] text-sm lg:text-base mb-4">
                  {service.subtitle}
                </p>
                <ul className="list-disc list-inside text-[#C0C0C0] space-y-1 ml-4 text-sm lg:text-base">
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
        className="py-20 bg-foreground text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "ARCHITECTURAL DESIGN",
                description:
                  "We specialize in creating innovative and functional architectural designs that perfectly align with your vision and the environment.",
              },
              {
                title: "RESIDENTIAL INTERIOR DESIGN",
                description:
                  "Transform your home into a space of comfort and style with customized interior design solutions that reflect your personality.",
              },
              {
                title: "COMMERCIAL SPACES",
                description:
                  "Designing efficient, modern, and inspiring commercial spaces that foster productivity and offer a welcoming atmosphere for clients and employees.",
              },
              {
                title: "CUSTOM FURNITURE DESIGN",
                description:
                  "Our bespoke furniture designs are crafted to complement your architectural space with style, functionality, and quality craftsmanship.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className={`text-center p-6 ${
                  i === 0
                    ? "bg-[#0A0A0A] text-[#F8F8F8]"
                    : "border border-[#C0C0C0] bg-[#1F1F1F] text-[#F8F8F8]"
                } rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`/help${i + 1}.jpeg`}
                  alt={service.title}
                  className="mx-auto mb-4 w-12 h-12 object-cover rounded-full shadow-sm"
                />
                <h5 className="font-semibold">{service.title}</h5>
                <p className="text-sm mt-2 text-[#C0C0C0]">
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
            <h5 className="text-accent font-semibold uppercase">
              Our Services
            </h5>
            <h2 className="text-3xl font-bold mt-2 leading-snug">
              Crafting Spaces That Inspire
            </h2>
            <p className="text-black mt-4 leading-relaxed">
              At TAW Designs, we focus on creating environments that blend
              aesthetics with functionality. Whether it's residential or
              commercial spaces, we offer comprehensive architectural services
              tailored to your specific needs.
            </p>
            <p className="text-black mt-4 leading-relaxed">
              From the initial concept to final execution, our goal is to
              deliver spaces that not only meet but exceed client expectations,
              while ensuring sustainability and comfort in every project.
            </p>
            <motion.button
              className="mt-6 bg-black text-white px-6 py-3 uppercase font-semibold rounded-md shadow-md hover:bg-accent hover:text-[#0A0A0A] transition-all duration-300 w-max"
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Work Process Section */}
      <motion.section
        className="py-20 bg-[#0A0A0A] text-[#F8F8F8]"
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
            <h5 className="text-[#D4AF37] font-semibold">HOW WE WORK</h5>
            <h2 className="text-3xl font-bold mt-2">
              FROM IDEAS TO INSPIRING DESIGNS
            </h2>
            <p className="text-[#C0C0C0] mt-4">
              We follow a structured process that integrates creativity with
              functionality, ensuring we meet client expectations at every
              stage.
            </p>

            {[
              {
                title: "INITIAL CONSULTATION",
                description:
                  "We begin with a deep dive into understanding your goals, lifestyle, and preferences, ensuring that our design aligns with your vision.",
              },
              {
                title: "DESIGN PHASE",
                description:
                  "Our designers bring your vision to life with detailed plans, mood boards, and design concepts, ensuring clarity and alignment.",
              },
              {
                title: "EXECUTION AND FINAL TOUCHES",
                description:
                  "Once designs are approved, we bring them to life with meticulous craftsmanship, using only the finest materials and finishing touches.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 py-4 border-b border-[#C0C0C0]"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-[#D4AF37] font-bold text-xl">0{i + 1}</h3>
                <div>
                  <h6 className="font-semibold">{step.title}</h6>
                  <p className="text-sm text-[#C0C0C0]">{step.description}</p>
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
                title: "RESIDENTIAL DESIGN",
                description:
                  "Creating spaces that reflect your personal style, enhancing comfort and functionality for modern living.",
              },
              {
                title: "COMMERCIAL SPACES",
                description:
                  "Designs that align with your business goals, enhancing brand identity, productivity, and customer experience.",
              },
              {
                title: "RESTAURANT INTERIORS",
                description:
                  "Transforming dining spaces into inviting and memorable environments with attention to ambiance and flow.",
              },
              {
                title: "OFFICE INTERIORS",
                description:
                  "Smart office layouts that foster collaboration and productivity, supporting a company’s vision and culture.",
              },
            ].map((service, i) => (
              <div key={i}>
                <img
                  src="/help1.jpeg"
                  alt={service.title}
                  className="w-full mb-2 rounded-md"
                />
                <div className="shadow-md p-4 text-center rounded-md bg-[#1F1F1F]">
                  <h6 className="text-[#D4AF37] font-semibold">
                    {service.title}
                  </h6>
                  <p className="text-sm text-[#C0C0C0] mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#D4AF37] text-black py-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h4 className="text-sm uppercase tracking-widest font-semibold text-[#1F1F1F]">
            Let's Bring Your Vision to Life
          </h4>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug">
            Ready to Redefine Your Space? <br className="hidden md:block" />
            With Elegant and Functional Design?
          </h3>
          <p className="mt-4 text-base md:text-lg text-black/80">
            Experience custom interior solutions that blend creativity,
            functionality, and your personal style for a truly transformative
            environment.
          </p>
          <motion.button
            className="mt-6 inline-block px-10 py-3 bg-black text-white rounded-full shadow-lg text-sm uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch with Us
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
