'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h5 className="text-[#e0b378] font-semibold text-sm uppercase mb-2">
            Our Testimonial
          </h5>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            At TAW Designs, client satisfaction is our biggest achievement. Hear what our valued clients have to say.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Testimonial 1 */}
          <motion.div
            className="bg-white p-5 sm:p-6 shadow-lg rounded-xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              " TAW Designs turned our vision into reality. Their attention to detail and creative approach transformed our space beyond expectations. "
            </p>
            <hr className="w-10 border-[#e0b378] mb-2" />
            <h4 className="text-base font-bold text-gray-900">Anjali Mehta</h4>
            <p className="text-sm text-gray-500">Founder, Mehta Wellness Studio</p>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-white p-5 sm:p-6 shadow-lg rounded-xl flex flex-col sm:flex-row items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src="/help1.jpeg"
              alt="Client"
              width={100}
              height={100}
              className="rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="text-left sm:pl-4">
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                " Working with TAW Designs was a smooth and satisfying experience. They understood our needs and delivered with excellence. "
              </p>
              <hr className="w-10 border-[#e0b378] mb-2" />
              <h4 className="text-base font-bold text-gray-900">Rajeev Sharma</h4>
              <p className="text-sm text-gray-500">Director, Sharma Infra</p>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-semibold text-gray-800 mb-6">Our Partners</h5>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
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
                  width={100}
                  height={60}
                  className="object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by industry leaders and startups alike. We proudly collaborate with partners who share our vision for excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
