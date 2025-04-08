"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Headings */}

        {/* Animated Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5 className="text-[#e0b378] font-semibold text-sm uppercase mb-2">
            Our Testimonial
          </h5>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At TAW Designs, client satisfaction is our biggest achievement. Hear
            what our valued clients have to say about their experience working
            with us.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white p-6 shadow-lg rounded-xl text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg mb-4">
              " TAW Designs turned our vision into reality. Their attention to
              detail and creative approach transformed our space beyond
              expectations. "
            </p>
            <hr className="w-12 border-[#e0b378] mb-2" />
            <h4 className="text-lg font-bold text-gray-900">Anjali Mehta</h4>
            <p className="text-sm text-gray-500">
              Founder, Mehta Wellness Studio
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 shadow-lg rounded-xl flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 mb-4 md:mb-0">
              <Image
                src="/help1.jpeg"
                alt="Client"
                width={120}
                height={120}
                className="rounded-full object-cover mx-auto md:mx-0"
              />
            </div>
            <div className="flex-1 text-left md:pl-6">
              <p className="text-gray-700 text-lg mb-4">
                " Working with TAW Designs was a smooth and satisfying
                experience. They understood our needs and delivered with
                excellence. "
              </p>
              <hr className="w-12 border-[#e0b378] mb-2" />
              <h4 className="text-lg font-bold text-gray-900">Rajeev Sharma</h4>
              <p className="text-sm text-gray-500">Director, Sharma Infra</p>
            </div>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-semibold text-gray-800 mb-6">
            Our Partners
          </h5>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="max-w-5xl mx-auto"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SwiperSlide key={num}>
                <Image
                  src="/help1.jpeg"
                  alt={`Partner ${num}`}
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Trusted by industry leaders and startups alike. We proudly
            collaborate with partners who share our vision for excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
