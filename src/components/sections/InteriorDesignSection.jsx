"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InteriorDesignSection() {
  return (
    <section className="py-12 md:py-20 bg-[#0A0A0A] text-[#F8F8F8] px-4">
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
            <h5 className="text-[#D4AF37] font-semibold text-sm md:text-base uppercase tracking-wide">
              Discover Our Expertise
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] leading-snug">
              Redefining Architecture with Precision and Creativity
            </h2>
            <p className="text-[#C0C0C0] text-sm md:text-base">
              At TAW Designs, we specialize in creating cutting-edge
              architectural solutions that merge functionality with artistic
              expression. Whether it’s a residential, commercial, or hospitality
              project, we ensure every design reflects innovation and
              sustainability.
            </p>

            {/* Section for Innovative Concepts */}
            <div>
              <h5 className="text-[#D4AF37] font-semibold text-base mb-1">
                Innovative Design Concepts
              </h5>
              <p className="text-[#C0C0C0] text-sm md:text-base">
                Our designs are rooted in creativity and forward-thinking ideas.
                We blend modern technology with timeless style to craft spaces
                that are not only beautiful but also efficient and sustainable.
              </p>
            </div>

            {/* Section for Tailored Aesthetics */}
            <div>
              <h5 className="text-[#D4AF37] font-semibold text-base mb-1">
                Personalized Aesthetic Solutions
              </h5>
              <p className="text-[#C0C0C0] text-sm md:text-base">
                At TAW Designs, we understand that each project is unique. From
                concept to completion, we work closely with clients to ensure
                the design matches their vision while incorporating functional
                and aesthetic value.
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
            {["help1.jpeg", "help2.jpeg", "help3.jpeg", "help4.jpeg"]
              .reduce((acc, curr, i) => {
                const col = Math.floor(i / 2);
                acc[col] = acc[col] || [];
                acc[col].push(curr);
                return acc;
              }, [])
              .map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {col.map((img, i) => (
                    <div
                      key={img}
                      className="overflow-hidden shadow-sm border border-[#C0C0C0]"
                    >
                      <a href={`/${img}`} data-fslightbox="gallery-1">
                        <Image
                          src={`/${img}`}
                          alt={`architecture-${colIndex * 2 + i}`}
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
