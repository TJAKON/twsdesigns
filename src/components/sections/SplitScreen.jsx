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
      className={`h-screen w-full flex group transition-all duration-700 ${
        loaded ? 'opacity-100' : 'opacity-100'
      }`}
    >
      {/* INTERIOR Section */}
      <Link href="/" className="relative h-full w-full transition-all duration-700 ease-in-out group-hover:w-[30%] hover:w-[70%]">
        <div className="relative h-full w-full group/inner overflow-hidden">
          <Image
            src="/twsbanner.jpg"
            alt="Studio Ashby"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center bg-white/5 group-hover/inner:bg-black/70 transition-all duration-500 delay-200">
            <h1 className="text-white text-6xl md:text-8xl font-serif tracking-wider leading-tight opacity-0 group-hover/inner:opacity-80 transition-opacity duration-700 delay-300">
              ARCHITECTURE DESIGN
            </h1>
          </div>
        </div>
      </Link>

      {/* FURNITURE Section */}
      <Link href="/sister" className="relative h-full w-full transition-all duration-700 ease-in-out group-hover:w-[30%] hover:w-[70%]">
        <div className="relative h-full w-full group/inner overflow-hidden">
          <Image
            src="/banners/banner3.jpg"
            alt="Sister" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center bg-white/5 group-hover/inner:bg-black/70 transition-all duration-500 delay-200">
            <h1 className="text-amber-300 text-6xl md:text-8xl font-serif tracking-wider leading-tight opacity-0 group-hover/inner:opacity-80 transition-opacity duration-700 delay-300">
            INTERIOR DESIGN
            </h1>
          </div>
        </div>
      </Link>
    </section>
  );
}
