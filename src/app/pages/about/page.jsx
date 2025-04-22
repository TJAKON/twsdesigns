"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      {/* Banner Section */}
      <motion.section
        className="relative text-[#F8F8F8] text-center py-20 bg-[#0A0A0A]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
          <p className="text-sm mt-2">HOME / ABOUT US</p>
          <div className="bg-[#C0C0C0] mt-8 h-72 w-full rounded-lg"></div>
        </div>
      </motion.section>

      {/* Interior Design Overview */}
      <section className="py-20 bg-foreground text-secondary">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h5 className="text-[#D4AF37] font-semibold">
              MEET AR. SHARUTI RANJAN
            </h5>
            <h2 className="text-3xl font-bold mt-2">
              TRANSFORMING SPACES WITH VISION & EFFICIENCY
            </h2>
            <p className="mt-4 text-secondary">
              Ar. Sharuti Ranjan is a renowned architect based in Pune and
              Mumbai, celebrated for crafting spacious, functional designs from
              compact areas. His innovative approach to architecture blends
              sustainability with elegance, making him one of India’s most
              sought-after green architects.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-[#D4AF37] font-semibold uppercase">
                  Efficient & Eco-Friendly
                </h4>
                <p className="text-secondary">
                  With expertise in space efficiency and environmental
                  architecture, Sharuti leads projects with a vision rooted in
                  carpet efficiency, client-centric planning, and optimal site
                  utilization.
                </p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold uppercase">
                  Decades of Experience
                </h4>
                <p className="text-secondary">
                  A 1999 graduate from Guru Nanak Dev University, he has made a
                  mark across Ludhiana, Chandigarh, Indore, and Delhi. His
                  approachable demeanor and capable leadership ensure smooth
                  collaboration and impactful results.
                </p>
              </div>
            </div>
            <p className="mt-6 italic text-[#D4AF37] font-semibold">
              "My best is yet to arrive." – Ar. Sharuti Ranjan
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#C0C0C0] h-[280px] w-full"></div>
            <div className="bg-[#C0C0C0] h-[280px] w-full"></div>
            <div className="bg-[#C0C0C0] h-[280px] w-full"></div>
            <div className="bg-[#C0C0C0] h-[280px] w-full"></div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      {/* Concept Section */}
      <section className="py-20 bg-[#1F1F1F] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-[#C0C0C0] h-[300px] w-full"></div>
          <div>
            <h5 className="text-[#D4AF37] font-semibold">
              OUR DESIGN APPROACH
            </h5>
            <h2 className="text-3xl font-bold mt-2">
              CRAFTING SPACES WITH PURPOSE
            </h2>
            <p className="text-[#C0C0C0] mt-4">
              At TAW Designs, led by Ar. Sharuti Ranjan, our design ethos
              revolves around functionality, sustainability, and client-focused
              innovation. Every space is envisioned as an opportunity to
              maximize utility without compromising on aesthetics.
            </p>
            <div className="mt-6 space-y-6">
              {[
                {
                  title: "Concept",
                  desc: "We begin with in-depth analysis to ensure each design concept optimizes space, light, and sustainability, tailored to your lifestyle and goals.",
                },
                {
                  title: "Design",
                  desc: "Our design phase blends creativity with efficiency — from carpet optimization to eco-conscious materials, every detail matters.",
                },
                {
                  title: "Implementation",
                  desc: "We bring the vision to life with precision, ensuring seamless collaboration and on-ground execution that reflects our eco-modern ideology.",
                },
              ].map((item, i) => (
                <div className="flex gap-4 items-start" key={i}>
                  <h3 className="text-[#D4AF37] text-2xl font-bold">
                    0{i + 1}
                  </h3>
                  <div>
                    <h6 className="font-semibold">{item.title}</h6>
                    <p className="text-sm text-[#C0C0C0]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Functionality Section */}
      {/* Functionality Section */}
      <section className="py-20 bg-[#0A0A0A] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h5 className="text-[#D4AF37] font-semibold">
              FUNCTIONALITY AND DESIGN
            </h5>
            <h2 className="text-3xl font-bold mt-2">
              SPACES THAT SERVE AND INSPIRE
            </h2>
            <p className="text-[#C0C0C0] mt-4">
              At TAW Designs, our focus goes beyond beauty — we prioritize
              purpose. Guided by Ar. Sharuti Ranjan’s vision, we transform
              compact spaces into expansive experiences through smart,
              sustainable planning and ergonomic design solutions.
            </p>
            <p className="text-[#C0C0C0] mt-2">
              From high carpet efficiency to intuitive layouts, each project is
              shaped to elevate your everyday lifestyle while maintaining
              aesthetic harmony.
            </p>
            <button className="mt-6 bg-[#D4AF37] text-[#0A0A0A] px-6 py-2 rounded-md uppercase hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition-all">
              Contact Us Today
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-[#C0C0C0] h-40 w-full"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process */}
      {/* Our Design Process */}
      <section className="py-20 bg-[#1F1F1F] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Placeholder for process image or animation */}
          <div className="bg-[#C0C0C0] h-[300px] w-full"></div>

          {/* Content */}
          <div>
            <h5 className="text-[#D4AF37] font-semibold">
              OUR PROCESS IN ACTION
            </h5>
            <h2 className="text-3xl font-bold mt-2">
              EFFICIENCY MEETS PURPOSE
            </h2>
            <p className="text-[#C0C0C0] mt-4">
              Our design methodology blends innovation with intention —
              optimizing every inch of space, budget, and timeline. With a deep
              focus on sustainability, client goals, and regulatory compliance,
              we deliver high-performing architectural outcomes across Pune,
              Mumbai, and Maharashtra.
            </p>
            <p className="text-[#C0C0C0] mt-2">
              We integrate Biophilic Architecture and nature-centric layouts,
              ensuring vibrant, human-centered environments that encourage
              well-being and community. Our process maximizes usable areas,
              improves carpet efficiency (92%-96%), and enhances real estate
              value while maintaining compliance with DCR norms.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { label: "Research & Ideation", percent: 100 },
                { label: "Design Development & Optimization", percent: 92 },
                { label: "Execution & Delivery", percent: 95 },
              ].map((item, i) => (
                <div key={i}>
                  <h6 className="font-semibold text-sm mb-1">{item.label}</h6>
                  <div className="w-full bg-[#C0C0C0] h-2 rounded-full">
                    <div
                      className="bg-[#D4AF37] h-2 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Strive For Excellence */}
      <section className="py-20 bg-[#0A0A0A] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-[#D4AF37]">
            WE STRIVE FOR EXCELLENCE
          </h2>
          <p className="text-sm max-w-3xl text-[#C0C0C0]">
            At TAW Designs, excellence is not just a goal — it’s our foundation.
            Every project is driven by in-depth research, innovative
            problem-solving, and a deep respect for nature and human well-being.
            Our commitment to Biophilic Architecture, space optimization, and
            regulatory expertise allows us to deliver cost-effective,
            high-performance spaces that stand the test of time.
          </p>
          <p className="text-sm max-w-3xl text-[#C0C0C0] mt-2">
            From reducing spatial wastage to maximizing carpet efficiency (up to
            96%), we ensure every design element contributes to usability,
            comfort, and environmental harmony. With us, clients receive not
            only outstanding designs — but also value, sustainability, and a
            vision brought to life.
          </p>
          <button className="mt-6 bg-[#D4AF37] text-[#0A0A0A] px-6 py-2 rounded-md uppercase hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition-all">
            Discover Our Work
          </button>
        </div>
      </section>

      {/* From Concept to Functional Beauty */}
      <section className="py-20 bg-[#D4AF37] text-center text-[#0A0A0A]">
        <h5 className="text-[#0A0A0A] font-extrabold tracking-widest">
          TRANSFORM YOUR SPACE WITH PURPOSE
        </h5>
        <h2 className="text-3xl font-bold mt-2">
          FROM CONCEPT TO FUNCTIONAL BEAUTY
        </h2>
        <p className="text-sm max-w-2xl mx-auto mt-4 text-[#333333]">
          At TAW Designs, we turn visionary concepts into practical, beautiful
          realities. Our architecture blends function with emotion — creating
          spaces that are energy-efficient, sustainable, and personalized to
          your lifestyle. Let’s bring your vision to life with innovation and
          intention.
        </p>
        <button className="mt-6 bg-[#0A0A0A] text-[#D4AF37] px-6 py-2 rounded-md uppercase hover:bg-[#F8F8F8] hover:text-[#0A0A0A] transition-all">
          Get In Touch
        </button>
      </section>
    </>
  );
}
