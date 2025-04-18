'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      {/* Banner Section */}
      <motion.section className="relative text-[#F8F8F8] text-center py-20 bg-[#0A0A0A]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
          <p className="text-sm mt-2">HOME / ABOUT US</p>
          <div className="bg-[#C0C0C0] mt-8 h-72 w-full rounded-lg"></div>
        </div>
      </motion.section>

      {/* Interior Design Overview */}
      <section className="py-20 bg-[#0A0A0A] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h5 className="text-[#D4AF37] font-semibold">WELCOME TO TAW Designs</h5>
            <h2 className="text-3xl font-bold mt-2">INTERIOR DESIGN THAT INSPIRES</h2>
            <p className="text-[#C0C0C0] mt-4">At TAW Designs, we craft interiors that merge functionality with elegance. Our designs transform spaces, creating environments that resonate with your style and needs.</p>
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-[#D4AF37] font-semibold uppercase">Innovative Designs</h4>
                <p className="text-[#C0C0C0]">We embrace modern design trends and infuse innovative ideas into every project, ensuring your space stands out.</p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold uppercase">Custom Solutions</h4>
                <p className="text-[#C0C0C0]">We provide tailored solutions that reflect your unique preferences, blending comfort and style seamlessly.</p>
              </div>
            </div>
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
      <section className="py-20 bg-[#1F1F1F] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-[#C0C0C0] h-[300px] w-full"></div>
          <div>
            <h5 className="text-[#D4AF37] font-semibold">OUR DESIGN APPROACH</h5>
            <h2 className="text-3xl font-bold mt-2">DESIGNING WITH PURPOSE</h2>
            <p className="text-[#C0C0C0] mt-4">We approach each project with a goal of making every space functional, stylish, and reflective of the client’s vision. Our design process ensures a perfect blend of aesthetic appeal and practical functionality.</p>
            <div className="mt-6 space-y-6">
              {['Concept', 'Design', 'Implementation'].map((item, i) => (
                <div className="flex gap-4 items-start" key={i}>
                  <h3 className="text-[#D4AF37] text-2xl font-bold">0{i + 1}</h3>
                  <div>
                    <h6 className="font-semibold">{item}</h6>
                    <p className="text-sm text-[#C0C0C0]">A comprehensive approach to {item.toLowerCase()} to ensure a seamless transformation of your space.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Functionality Section */}
      <section className="py-20 bg-[#0A0A0A] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h5 className="text-[#D4AF37] font-semibold">FUNCTIONALITY AND DESIGN</h5>
            <h2 className="text-3xl font-bold mt-2">CREATING SPACES THAT WORK</h2>
            <p className="text-[#C0C0C0] mt-4">Our designs are not just visually pleasing; they are also highly functional, designed to enhance the way you live and work.</p>
            <button className="mt-6 bg-[#D4AF37] text-[#0A0A0A] px-6 py-2 rounded-md uppercase hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition-all">Contact Us Today</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-[#C0C0C0] h-40 w-full"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="py-20 bg-[#1F1F1F] text-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-[#C0C0C0] h-[300px] w-full"></div>
          <div>
            <h5 className="text-[#D4AF37] font-semibold">OUR PROCESS IN ACTION</h5>
            <h2 className="text-3xl font-bold mt-2">FROM CONCEPT TO REALITY</h2>
            <p className="text-[#C0C0C0] mt-4">Our process is designed to bring your vision to life, ensuring every step is executed with precision and care. We keep you involved every step of the way to ensure the end result is just as you imagined.</p>
            <div className="mt-6 space-y-4">
              {[ 
                { label: 'Initial Consultation', percent: 100 },
                { label: 'Design Development', percent: 85 },
                { label: 'Final Installation', percent: 90 }
              ].map((item, i) => (
                <div key={i}>
                  <h6 className="font-semibold text-sm mb-1">{item.label}</h6>
                  <div className="w-full bg-[#C0C0C0] h-2 rounded-full">
                    <div className="bg-[#D4AF37] h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
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
          <h2 className="text-3xl font-bold mb-4">WE STRIVE FOR EXCELLENCE</h2>
          <p className="text-sm max-w-xl text-[#C0C0C0]">At TAW Designs, we are dedicated to delivering exceptional designs that exceed client expectations. Every project is a testament to our commitment to quality and innovation.</p>
          <button className="mt-6 bg-[#D4AF37] text-[#0A0A0A] px-6 py-2 rounded-md uppercase hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition-all">Discover Our Work</button>
        </div>
      </section>

      {/* From Concept to Functional Beauty */}
      <section className="py-20 bg-[#1F1F1F] text-center text-[#F8F8F8]">
        <h5 className="text-[#D4AF37] font-semibold">TRANSFORM YOUR SPACE WITH STYLE</h5>
        <h2 className="text-3xl font-bold mt-2">FROM CONCEPT TO FUNCTIONAL BEAUTY</h2>
        <p className="text-sm max-w-xl mx-auto mt-4 text-[#C0C0C0]">Let us help you create a space that’s functional, beautiful, and uniquely yours. Contact us today to get started on your design journey.</p>
        <button className="mt-6 bg-[#D4AF37] text-[#0A0A0A] px-6 py-2 rounded-md uppercase hover:bg-[#F8F8F8] hover:text-[#0A0A0A] transition-all">Get In Touch</button>
      </section>
    </>
  );
}