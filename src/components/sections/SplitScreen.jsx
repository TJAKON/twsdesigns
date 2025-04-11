'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SplitScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="landing"
      className={`h-screen w-full flex flex-col md:flex-row group transition-all duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* INTERIOR Section */}
      <Link
        href="/"
        className="relative h-1/2 md:h-full w-full md:w-full transition-all duration-700 ease-in-out md:group-hover:w-[30%] md:hover:w-[70%]"
      >
        <div className="relative h-full w-full group/inner overflow-hidden">
          <Image
            src="/projects/p18.jpg"
            alt="Studio Ashby"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center bg-black/60 md:bg-white/5 md:group-hover/inner:bg-black/70 transition-all duration-500 delay-200">
            <h1 className="text-white text-4xl md:text-8xl font-serif tracking-wider leading-tight opacity-100 md:opacity-0 md:group-hover/inner:opacity-80 transition-opacity duration-700 delay-300">
              ARCHITECTURE DESIGN
            </h1>
          </div>
        </div>
      </Link>

      {/* FURNITURE Section */}
      <Link
        href="/sister"
        className="relative h-1/2 md:h-full w-full md:w-full transition-all duration-700 ease-in-out md:group-hover:w-[30%] md:hover:w-[70%]"
      >
        <div className="relative h-full w-full group/inner overflow-hidden">
          <Image
            src="/banners/banner3.jpg"
            alt="Sister"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center bg-black/60 md:bg-white/5 md:group-hover/inner:bg-black/70 transition-all duration-500 delay-200">
            <h1 className="text-amber-300 text-4xl md:text-8xl font-serif tracking-wider leading-tight opacity-100 md:opacity-0 md:group-hover/inner:opacity-80 transition-opacity duration-700 delay-300">
              INTERIOR DESIGN
            </h1>
          </div>
        </div>
      </Link>
    </section>
  );
}
