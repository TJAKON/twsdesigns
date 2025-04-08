'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "HOUSE INTERIOR",
    subtitle: "We take care of your",
    image: "/twsbanner.jpg",
    href: "/project1",
    color: "text-white",
  },
  {
    title: "LIVING SPACE",
    subtitle: "Modern & Elegant",
    image: "/help4.jpeg",
    href: "/project2",
    color: "text-white",
  },
  {
    title: "KITCHEN DESIGN",
    subtitle: "Innovative Concepts",
    image: "/twsbanner.jpg",
    href: "/project3",
    color: "text-white",
  },
  {
    title: "FURNITURE SETUP",
    subtitle: "Comfort Meets Style",
    image: "/help4.jpeg",
    href: "/project4",
    color: "text-white",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="w-full h-screen overflow-hidden flex">
      {projects.map((proj, index) => (
        <Link
          key={index}
          href={proj.href}
          className="group relative w-1/4 h-full transition-all duration-500 hover:w-[50%] flex-shrink-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-start p-8 text-left">
              <p className={`text-md md:text-xl font-light ${proj.color}`}>{proj.subtitle}</p>
              <h2 className={`text-2xl md:text-4xl font-bold ${proj.color}`}>{proj.title}</h2>
              <span className="mt-2 text-sm text-white opacity-70">Hover to explore</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
