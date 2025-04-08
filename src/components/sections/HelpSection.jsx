import React from "react";

const services = [
  {
    title: "ARCHITECTURAL PLANS",
    description: "Residential & Commercial Planning",
    image: "/help1.jpeg", // replace with actual image paths
  },
  {
    title: "INTERIOR DESIGN",
    description: "Crafting Functional & Aesthetic Interiors",
    image: "/help2.jpeg",
  },
  {
    title: "PROJECT MANAGEMENT",
    description: "Execution & Coordination with Experts",
    image: "/help3.jpeg",
  },
  {
    title: "GREEN BUILDING DESIGN",
    description: "Sustainable & Biophilic Architecture",
    image: "/help4.jpeg",
  },
];

export default function HelpSection() {
  return (
    <section className="bg-[#f4f0e7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-4 text-gray-900 uppercase">
          How Can We Help You?
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl leading-relaxed">
          At TAW Designs Pvt. Ltd., we specialize in smart, sustainable design solutions.
          From residential layouts to eco-conscious green buildings, we help you navigate
          your architectural journey with creativity, efficiency, and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative h-[450px] overflow-hidden group shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Title Banner */}
              <div className="absolute top-4 left-4 bg-[#b5a474] text-white text-sm px-4 py-1 uppercase font-semibold clip-path-banner">
                {item.title}
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-4 text-white">
                <h3 className="text-xl font-light">{item.description}</h3>
                <p className="mt-2 text-sm tracking-widest">READ MORE &gt;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
