'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function InteriorDesignSection() {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content with animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h5 className="text-[#e0b378] font-semibold text-lg tracking-wide uppercase">Discover TAW Designs</h5>
            <h2 className="text-4xl font-bold text-gray-900">Exceptional Interior Design Solutions</h2>
            <p className="text-gray-600">
              At TAW Designs Pvt. Ltd., we blend creativity with functionality to craft interior spaces
              that inspire. From residential to commercial projects, our expert team ensures every detail
              reflects your vision, lifestyle, and purpose.
            </p>

            <div>
              <h5 className="text-[#e0b378] font-semibold text-lg">Innovative Concepts</h5>
              <p className="text-gray-600">
                We redefine spaces with modern, trendsetting designs rooted in innovation and smart space utilization.
                Our goal is to create interiors that are both aesthetically appealing and functionally superior.
              </p>
            </div>

            <div>
              <h5 className="text-[#e0b378] font-semibold text-lg">Tailored Aesthetics</h5>
              <p className="text-gray-600">
                Every project we handle is unique. Our team collaborates closely with clients to ensure the interiors
                align with their personal tastes and professional needs, delivering a signature look that truly stands out.
              </p>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-4 mt-5">
              {["help1.jpeg", "help2.jpeg"].map((img, i) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={i}
                  className="overflow-hidden shadow-xl"
                >
                  <a href={`/${img}`} data-fslightbox="gallery-1">
                    <Image
                      src={`/${img}`}
                      alt={`interior-${i}`}
                      width={600}
                      height={700}
                      className="transition-transform duration-500 hover:scale-105 w-full h-auto object-cover"
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {["help3.jpeg", "help4.jpeg"].map((img, i) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={i + 2}
                  className="overflow-hidden shadow-xl"
                >
                  <a href={`/${img}`} data-fslightbox="gallery-1">
                    <Image
                      src={`/${img}`}
                      alt={`interior-${i + 2}`}
                      width={600}
                      height={700}
                      className="transition-transform duration-500 hover:scale-105 w-full h-auto object-cover"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
