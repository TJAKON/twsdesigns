"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Villa Interior",
    description:
      "High-end residential interior design with a modern-classical fusion for a 5BHK villa in Delhi.",
    image: "/buildings/b1.jpg",
    tags: ["Residential", "Luxury", "Modern"],
  },
  {
    title: "Corporate Office Space",
    description:
      "Complete workspace design and execution for a 5000 sq. ft. IT corporate office.",
    image: "/buildings/b2.jpg",
    tags: ["Commercial", "Productivity", "Minimal"],
  },
  {
    title: "Boutique Hotel Lobby",
    description:
      "Revamped the entrance lobby and lounge with contemporary themes for a boutique hotel chain.",
    image: "/buildings/b3.jpg",
    tags: ["Hospitality", "Contemporary", "Welcoming"],
  },
  {
    title: "Smart Apartment Living",
    description:
      "Designed compact yet luxurious smart home interiors for a 2BHK apartment in Mumbai.",
    image: "/buildings/b4.jpg",
    tags: ["Residential", "Smart Home", "Functional"],
  },
  {
    title: "Modern Retail Showroom",
    description:
      "A minimalistic and premium design for a lifestyle fashion brand's flagship showroom.",
    image: "/buildings/b5.jpg",
    tags: ["Commercial", "Retail", "Minimal"],
  },
  {
    title: "Luxury Spa & Wellness Center",
    description:
      "A calming interior environment crafted for an Ayurvedic spa in Kerala.",
    image: "/buildings/b6.jpg",
    tags: ["Wellness", "Luxury", "Natural"],
  },
  {
    title: "Studio Apartment Concept",
    description:
      "Space-saving and modular interiors for modern single-living studio flats.",
    image: "/buildings/b7.jpg",
    tags: ["Urban", "Compact", "Innovative"],
  },
  {
    title: "Designer Café Lounge",
    description:
      "Instagram-worthy café design with bold colors and bohemian charm.",
    image: "/buildings/b8.jpg",
    tags: ["Hospitality", "Trendy", "Artistic"],
  },
  {
    title: "Educational Classroom Interiors",
    description:
      "Smart-class ready design with ergonomic furniture and creative spaces.",
    image: "/buildings/b9.jpg",
    tags: ["Educational", "Functional", "Innovative"],
  },
  {
    title: "Art Gallery Concept",
    description:
      "Minimal yet dramatic space for a modern art exhibition hall.",
    image: "/buildings/p15.jpg",
    tags: ["Cultural", "Minimal", "Monochrome"],
  },
  {
    title: "Co-working Space Design",
    description:
      "Flexible and open office concept built for startups and freelancers.",
    image: "/buildings/p16.jpg",
    tags: ["Commercial", "Collaborative", "Trendy"],
  },
  {
    title: "Kids' Learning Center",
    description:
      "Colorful, fun, and safe interior layout for a preschool in Bangalore.",
    image: "/buildings/p17.jpg",
    tags: ["Educational", "Child-friendly", "Colorful"],
  },
  {
    title: "Luxury Bedroom Makeover",
    description:
      "Redefined comfort with textured walls, custom lighting, and cozy aesthetics.",
    image: "/buildings/p19.jpg",
    tags: ["Residential", "Luxury", "Comfort"],
  },
  {
    title: "Traditional Indian Living Room",
    description:
      "Timeless design combining heritage elements and modern functionality.",
    image: "/projects/p14.jpg",
    tags: ["Cultural", "Fusion", "Family Space"],
  },
  // {
  //   title: "Terrace Lounge Space",
  //   description:
  //     "A rooftop oasis designed for leisure, dining, and entertainment.",
  //   image: "/projects/p15.jpg",
  //   tags: ["Outdoor", "Lounge", "Urban"],
  // },
  // {
  //   title: "Home Library & Study Room",
  //   description:
  //     "Custom cabinetry and moody lighting make this the ideal focus zone.",
  //   image: "/projects/p16.jpg",
  //   tags: ["Residential", "Productivity", "Elegant"],
  // },
  // {
  //   title: "Wedding Venue Decor",
  //   description:
  //     "Luxury event interior setup for intimate weddings and ceremonies.",
  //   image: "/projects/p17.jpg",
  //   tags: ["Event", "Luxury", "Romantic"],
  // },
  // {
  //   title: "Kitchen Modular Makeover",
  //   description:
  //     "Space-efficient modular kitchen with built-in smart storage systems.",
  //   image: "/projects/placeholder.jpg",
  //   tags: ["Residential", "Functional", "Modular"],
  // },
  // {
  //   title: "Retail Jewelry Store Design",
  //   description:
  //     "Opulent visual merchandising with modern lighting for premium appeal.",
  //   image: "/projects/placeholder.jpg",
  //   tags: ["Commercial", "Luxury", "Retail"],
  // },
  // {
  //   title: "Modern Farmhouse Interior",
  //   description:
  //     "Rustic charm meets urban comfort in this eco-luxury farmhouse.",
  //   image: "/projects/placeholder.jpg",
  //   tags: ["Residential", "Farmhouse", "Rustic"],
  // },
];

  

function page() {
  return (
    <section className="py-16 px-4 mt-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center uppercase">
          Our Interior Design Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[600px] object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#e0b378] text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
