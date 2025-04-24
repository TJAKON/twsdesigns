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
              One of premier architectural organizations in Pune, TAW Designs
              Pvt Ltd., offers creative and environmentally friendly design
              solutions for interior, landscape, and commercial and residential
              architecture. With an Expertise in Project Management and
              Execution of planning, TAW Designs not only helps clients in
              Project Execution but also helps in Cost Friendly budgets with
              Extra Space in Design and Planning with Extra Ordinary “Design
              Thinking” for your Dream Projects.
            </p>

            {/* Section for Innovative Concepts */}
            <div>
              <h5 className="text-[#D4AF37] font-semibold text-base mb-1">
              Our Design Efficiency 
              </h5>
              <p className="text-[#C0C0C0] text-sm md:text-base">
              We ensures optimal use of resources, time, and budget, minimizing waste and streamlining workflows for faster project delivery. 
              </p>
            </div>

            {/* Section for Tailored Aesthetics */}
            <div>
              <h5 className="text-[#D4AF37] font-semibold text-base mb-1">
              Our Design Efficacy
              </h5>
              <p className="text-[#C0C0C0] text-sm md:text-base">
              We are focusing on functional, aesthetic, and sustainable outcomes, we create cost-effective, high-performing architectural solutions for residential, commercial, and mixed-use projects in Pune, Mumbai, and Maharashtra. Our designs enhance usability, energy efficiency, and long-term value, ensuring eco-friendly construction and sustainable architecture that align with the client’s vision and goals.

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
            {["Images/DiscoverOurExpertisefirst.jpg", "Images/DiscoverOurExpertise2.jpg", "Images/DiscoverOurExpertise3.jpg", "Images/DiscoverOurExpertise4.jpg"]
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
                      {/* <a href={`/${img}`} data-fslightbox="gallery-1"> */}
                        <Image
                          src={`/${img}`}
                          alt={`architecture-${colIndex * 2 + i}`}
                          width={600}
                          height={400}
                          className="transition-transform duration-300 hover:scale-105 w-full h-[220px] md:h-[350px] object-cover"
                        />
                      {/* </a> */}
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
