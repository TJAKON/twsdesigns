"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const partnerLogos = [
  { id: 1, image: "/logo/l1.png", name: "Partner 1" },
  { id: 2, image: "/logo/l2.png", name: "Partner 2" },
  { id: 3, image: "/logo/l3.png", name: "Partner 3" },
  { id: 4, image: "/logo/l4.png", name: "Partner 4" },
  { id: 5, image: "/logo/l5.png", name: "Partner 5" },
  // { id: 6, image: "/logo/l6.png", name: "Partner 6" },
  // { id: 7, image: "/logo/l7.png", name: "Partner 7" },
  // { id: 8, image: "/logo/l8.png", name: "Partner 8" },
  // { id: 9, image: "/logo/l9.png", name: "Partner 9" },
  // { id: 10, image: "/logo/l10.png", name: "Partner 10" },
  // { id: 11, image: "/logo/l11.png", name: "Partner 11" },
  // { id: 12, image: "/logo/l12.png", name: "Partner 12" },
];

const testimonials = [
  {
    name: "Harish Varu",
    location: "Lonavala",
    quote:
      "TAW Designs brought elegance and innovation to our space. Truly impressive work!",
    image: "/logo/l1.png",
  },
  {
    name: "Jefro Reality",
    location: "Mamurdie",
    quote:
      "Their creative vision aligned perfectly with our goals. Highly recommended!",
    image: "/logo/l2.png",
  },
  {
    name: "Mohak City",
    location: "Virar",
    quote:
      "Mohak City’s identity was enhanced by their sophisticated touch. Great collaboration!",
    image: "/logo/l3.png",
  },
  {
    name: "Vilas Nandgude",
    location: "Pimple Nilakh",
    quote: "TAW Designs turned our ideas into functional and beautiful spaces.",
    image: "/logo/l4.png",
  },
  {
    name: "Aahan Builders",
    location: "Kothrud and Donjhe",
    quote:
      "We’ve worked with many teams — TAW Designs stands out in professionalism and delivery.",
    image: "/logo/l5.png",
  },
  {
    name: "Ajmera Builders",
    location: "Chembur and Indore",
    quote:
      "Their unique design sense added immense value to our projects in multiple cities.",
    image: "/logo/l5.png",
  },
];

const fadeInUptestimonials = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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
            At TAW Designs, client satisfaction is our biggest achievement. Hear
            what our valued clients have to say.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Client Testimonials
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            // pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-6 sm:p-8 shadow-xl rounded-2xl h-full flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300"
                  variants={fadeInUptestimonials}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover mr-4 border-2 border-[#e0b378]"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed flex-grow">
                    “{testimonial.quote}”
                  </p>
                  <hr className="w-12 border-[#e0b378] mt-auto" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Partners */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-semibold text-gray-800 mb-6">
            Our Partners
          </h5>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="max-w-5xl mx-auto"
          >
            {partnerLogos.map((partner) => (
              <SwiperSlide key={partner.id}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={100}
                  height={60}
                  className="object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by industry leaders and startups alike. We proudly
            collaborate with partners who share our vision for excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
