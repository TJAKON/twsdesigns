"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const images = ["/banners/banner4.jpg", "/banners/banner3.jpg"];

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

      {/* Content */}
      <div className="absolute z-20 top-20 inset-0 flex flex-col items-center justify-center text-center px-4 gap-6">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 tracking-tight">
          INNOVATIVE IDEAS
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          FOR YOUR STYLE
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link href="/projects">
            <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold rounded-none">
              OUR PROJECT
            </button>
          </Link>
          <Link href="/pricing">
            <button className="px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold rounded-none">
              OUR PRICING
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
