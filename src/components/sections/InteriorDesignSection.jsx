'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function InteriorDesignSection() {
  return (
    <section className="py-12 md:py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h5 className="text-[#e0b378] font-semibold text-sm md:text-base uppercase tracking-wide">
              Discover TAW Designs
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Exceptional Interior Design Solutions
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              At TAW Designs Pvt. Ltd., we blend creativity with functionality to craft interior spaces
              that inspire. From residential to commercial projects, our expert team ensures every detail
              reflects your vision, lifestyle, and purpose.
            </p>

            <div>
              <h5 className="text-[#e0b378] font-semibold text-base mb-1">Innovative Concepts</h5>
              <p className="text-gray-600 text-sm md:text-base">
                We redefine spaces with modern, trendsetting designs rooted in innovation and smart space utilization.
              </p>
            </div>

            <div>
              <h5 className="text-[#e0b378] font-semibold text-base mb-1">Tailored Aesthetics</h5>
              <p className="text-gray-600 text-sm md:text-base">
                Every project we handle is unique. Our team collaborates closely with clients to ensure the interiors
                align with their personal tastes and professional needs.
              </p>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[["help1.jpeg", "help2.jpeg"], ["help3.jpeg", "help4.jpeg"]].map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {col.map((img, i) => (
                  <div
                    key={img}
                    className="overflow-hidden shadow-sm"
                  >
                    <a href={`/${img}`} data-fslightbox="gallery-1">
                      <Image
                        src={`/${img}`}
                        alt={`interior-${colIndex * 2 + i}`}
                        width={600}
                        height={400}
                        className="transition-transform duration-300 hover:scale-105 w-full h-auto object-cover"
                      />
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
