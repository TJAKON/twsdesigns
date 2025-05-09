'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "PROJECT & COST ANALYSIS",
    subtitle: "We take care of your",
    image: "/banners/i1.jpeg",
    href: "/pages/projects",
    color: "text-white",
  },
  {
    title: "ARCHITECTURAL DESIGN",
    subtitle: "Modern & Elegant",
    image: "/banners/i4.jpeg",
    href: "/pages/projects",
    color: "text-white",
  },
  {
    title: "CONSULTANCY & COORDINATION",
    subtitle: "Innovative Concepts",
    image: "/banners/i3.jpeg",
    href: "/pages/projects",
    color: "text-white",
  },
  {
    title: "PROJECT MANAGEMENT & EXECUTION",
    subtitle: "Comfort Meets Style",
    image: "/banners/i2.jpeg",
    href: "/pages/projects",
    color: "text-white",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="w-full h-full md:h-screen flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
      {projects.map((proj, index) => (
        <Link
          key={index}
          href={proj.href}
          className={`
            group relative 
            w-full min-h-[50vh] 
            md:min-h-0 md:h-full md:w-1/4 
            transition-all duration-500 
            hover:md:w-[50%] 
            hover:min-h-[70vh] md:hover:h-full
            flex-shrink-0
          `}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-start p-6 md:p-8 text-left">
              <p className={`text-md md:text-xl font-light ${proj.color}`}>{proj.subtitle}</p>
              <h2 className={`text-2xl md:text-4xl font-bold ${proj.color}`}>{proj.title}</h2>
              <span className="mt-2 text-sm text-white opacity-70 hidden md:block">Hover to explore</span>
              <span className="mt-2 text-sm text-white opacity-70 md:hidden">Tap to explore</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
