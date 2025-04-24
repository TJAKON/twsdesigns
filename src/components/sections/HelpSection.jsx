import React from "react";
import Link from "next/link";

const services = [
  {
    title: "ARCHITECTURAL PLANS",
    description: "Residential & Commercial Planning",
    image: "/Images/archplans1.jpg",
    href: "/pages/services",
  },
  {
    title: "PLANNING & DESIGN",
    description: "Smart & Sustainable Design Solutions",  
    image: "/banners/i5.jpeg",
    href: "/pages/planninganddesigningservice",
  },
  {
    title: "PROJECT MANAGEMENT",
    description: "Execution & Coordination with Experts",
    image: "/Images/ProjectbackgroundImage.jpg",
    href: "/pages/projectmanagementservice",
  },
  {
    title: "GREEN BUILDING DESIGN",
    description: "Sustainable & Biophilic Architecture",
    image: "/projects/p15.jpg",
    href: "/pages/tawgreenservice",
  },
];

export default function HelpSection() {
  return (
    <section className="bg-[#0A0A0A]/90 py-16 px-4 text-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-4 uppercase">
          How Can We Help You?
        </h2>
        <p className="text-[#C0C0C0] mb-12 max-w-3xl leading-relaxed">
          At TAW Designs Pvt. Ltd., we specialize in smart, sustainable design solutions.
          From residential layouts to eco-conscious green buildings, we help you navigate
          your architectural journey with creativity, efficiency, and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative h-[450px] overflow-hidden group shadow-md border border-[#C0C0C0]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Title Banner */}
              <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0A0A0A] text-sm px-4 py-1 uppercase font-semibold clip-path-banner">
                {item.title}
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-6 text-[#F8F8F8] pl-4 bg-[#1F1F1F] bg-opacity-80 w-full py-4">
                <h3 className="text-md font-medium">{item.description}</h3>
                {/* <p className="mt-1 text-sm tracking-wider text-[#C0C0C0]">READ MORE &gt;</p> */}
                <Link href={item.href} className="mt-1 text-sm tracking-wider text-[#C0C0C0]">
                READ MORE &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
