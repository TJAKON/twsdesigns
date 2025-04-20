"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const images = [
  "/banners/banner4.jpg",
  "/banners/banner3.jpg",
  "/projects/p15.jpg",
  "/projects/p17.jpg",
  "/projects/p19.jpg",
];

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="absolute inset-0 z-0 !h-full !w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`slide-${i}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content - Bottom Left */}
      <div className="absolute z-20 bottom-80 left-8 text-center md:bottom-28 md:left-10 md:text-left px-4 max-w-xl space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-300 uppercase">
          Smarter Layouts
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
          Larger Possibilities
        </h2>
        <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
          <Link href="/pages/projects">
            <button className=" px-3 py-2 md:px-6 md:py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold rounded-none">
              OUR PROJECT
            </button>
          </Link>
          <Link href="/pages/contact">
            <button className="px-3 py-2 md:px-6 md:py-3 border border-red-500 text-amber-300 hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold rounded-none">
              OUR PRICING
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="absolute z-20 bottom-0 left-0 w-full px-6 md:px-10 py-4 md:py-6 flex flex-col md:flex-row gap-2 md:gap-6 bg-black/30 backdrop-blur-md">
        <div className="text-white">
          <h3 className="text-md md:text-xl font-semibold">10+ Years Experience</h3>
          <p className="text-xs">We build innovative, sustainable structures.</p>
        </div>
        <div className="text-white">
          <h3 className="text-md md:text-xl font-semibold">500+ Projects</h3>
          <p className="text-xs">Successfully completed across India.</p>
        </div>
        <div className="text-white">
          <h3 className="text-md md:text-xl font-semibold">Top Quality Materials</h3>
          <p className="text-xs">We use premium and certified products.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
