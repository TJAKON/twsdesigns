'use client';
import Image from "next/image";
import { motion } from "framer-motion";


export default function Page() {
  return (
    <section className="py-16 px-4 mt-20 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About TAW Designs Pvt. Ltd.
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          At <strong>TAW Designs</strong>, we craft more than just spaces — we design lifestyles.
          Founded with the vision to blend functionality and aesthetic elegance,
          our firm specializes in interior design and project execution across residential,
          commercial, and hospitality sectors.
        </p>
        <p className="text-gray-600 text-base leading-relaxed">
          Our team of passionate designers, architects, and project managers work
          closely with clients to ensure a seamless design-to-delivery experience.
          Every space we touch becomes a reflection of both our creativity and your personality.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-2">
          <div>
            <h5 className="text-[#e0b378] font-semibold mb-1">10+ Years of Experience</h5>
            <p className="text-sm text-gray-600">
              Delivering excellence in design and execution across India.
            </p>
          </div>
          <div>
            <h5 className="text-[#e0b378] font-semibold mb-1">100+ Projects Completed</h5>
            <p className="text-sm text-gray-600">
              Residential, Commercial, Hospitality & Retail transformations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative w-full h-full"
      >
        <div className="relative aspect-square md:aspect-video rounded-lg overflow-hidden shadow-md">
          <Image
            src="/help1.jpeg" // Make sure to add this image in /public
            alt="TAW Designs office"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
  );
}
