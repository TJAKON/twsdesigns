"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Villa Interior",
    description:
      "High-end residential interior design with a modern-classical fusion for a 5BHK villa in Delhi. The design combines luxury with comfort, featuring bespoke furniture, intricate detailing, and a blend of warm and cool tones for an elegant living space. The villa's expansive rooms are designed to highlight natural light and create a seamless flow between indoor and outdoor areas.",
    image: "/buildings/b1.jpg",
    tags: ["Residential", "Luxury", "Modern"],
  },
  {
    title: "Corporate Office Space",
    description:
      "Complete workspace design and execution for a 5000 sq. ft. IT corporate office. The project focuses on boosting productivity with ergonomic furniture, collaborative spaces, and a calming color palette. The design also integrates smart office technologies, energy-efficient lighting, and soundproof workstations to ensure a comfortable and efficient working environment.",
    image: "/buildings/b2.jpg",
    tags: ["Commercial", "Productivity", "Minimal"],
  },
  {
    title: "Boutique Hotel Lobby",
    description:
      "Revamped the entrance lobby and lounge with contemporary themes for a boutique hotel chain. The design features a mix of modern elements, including clean lines, artistic lighting fixtures, and plush seating arrangements, creating a welcoming atmosphere. Natural materials such as wood and stone are used alongside metal accents to evoke luxury and elegance, ensuring guests feel relaxed the moment they enter.",
    image: "/buildings/b3.jpg",
    tags: ["Hospitality", "Contemporary", "Welcoming"],
  },
  {
    title: "Smart Apartment Living",
    description:
      "Designed compact yet luxurious smart home interiors for a 2BHK apartment in Mumbai. The apartment showcases space-saving solutions such as modular furniture and built-in storage to maximize functionality without compromising on aesthetics. Cutting-edge smart home technologies, including voice-controlled lighting and climate control systems, are seamlessly integrated into the design, creating a modern and efficient living space.",
    image: "/buildings/b4.jpg",
    tags: ["Residential", "Smart Home", "Functional"],
  },
  {
    title: "Modern Retail Showroom",
    description:
      "A minimalistic and premium design for a lifestyle fashion brand's flagship showroom. The layout is designed to emphasize the brand's identity, with open, airy spaces that highlight the product displays. High-quality materials such as marble and glass are used throughout to create a sophisticated and inviting atmosphere. The lighting design is focused on accentuating the merchandise while ensuring a comfortable shopping experience.",
    image: "/buildings/b5.jpg",
    tags: ["Commercial", "Retail", "Minimal"],
  },
  {
    title: "Luxury Spa & Wellness Center",
    description:
      "A calming interior environment crafted for an Ayurvedic spa in Kerala. The space features earthy tones, natural textures like bamboo and stone, and an abundance of greenery, creating a serene and tranquil atmosphere. Private treatment rooms are designed for comfort and relaxation, with aromatherapy diffusers, soothing lighting, and soundproofing to provide a peaceful retreat for guests.",
    image: "/buildings/b6.jpg",
    tags: ["Wellness", "Luxury", "Natural"],
  },
  {
    title: "Studio Apartment Concept",
    description:
      "Space-saving and modular interiors for modern single-living studio flats. The design incorporates smart furniture that can be adapted to different needs, including fold-out beds, extendable tables, and hidden storage. The use of neutral colors and mirrors helps to visually expand the space, while functional zones are defined through creative partitioning techniques.",
    image: "/buildings/b7.jpg",
    tags: ["Urban", "Compact", "Innovative"],
  },
  {
    title: "Designer Café Lounge",
    description:
      "Instagram-worthy café design with bold colors and bohemian charm. This project focuses on creating a unique and vibrant environment for customers to relax and socialize. The space features eclectic furniture, vibrant textiles, and creative wall art that reflects the café's personality. Outdoor seating areas are designed to blend seamlessly with the interior, offering customers a chance to enjoy the ambiance in both private and communal settings.",
    image: "/buildings/b8.jpg",
    tags: ["Hospitality", "Trendy", "Artistic"],
  },
  {
    title: "Educational Classroom Interiors",
    description:
      "Smart-class ready design with ergonomic furniture and creative spaces. The classroom layout is designed to foster collaboration and learning, featuring flexible seating arrangements and interactive whiteboards. Natural light and vibrant colors are used to enhance focus and creativity. The inclusion of quiet zones and recreational areas provides students with a balance of study and relaxation.",
    image: "/buildings/b9.jpg",
    tags: ["Educational", "Functional", "Innovative"],
  },
  {
    title: "Art Gallery Concept",
    description:
      "Minimal yet dramatic space for a modern art exhibition hall. The design utilizes clean lines, neutral tones, and dramatic lighting to create a backdrop that emphasizes the artwork on display. The layout is optimized to allow fluid movement through the gallery, with distinct zones for various art mediums. The space is also adaptable, allowing for different types of exhibitions and events.",
    image: "/buildings/p15.jpg",
    tags: ["Cultural", "Minimal", "Monochrome"],
  },
  {
    title: "Co-working Space Design",
    description:
      "Flexible and open office concept built for startups and freelancers. The design features open-plan workspaces with movable furniture to allow for customization based on team size and needs. Breakout areas, meeting pods, and communal kitchens are integrated to foster collaboration and creativity. The space incorporates sustainable materials and energy-efficient systems to create an eco-friendly work environment.",
    image: "/buildings/p16.jpg",
    tags: ["Commercial", "Collaborative", "Trendy"],
  },
  {
    title: "Kids' Learning Center",
    description:
      "Colorful, fun, and safe interior layout for a preschool in Bangalore. The design incorporates playful elements such as interactive wall murals, soft play areas, and age-appropriate furniture. The space is designed to stimulate children's creativity and learning, with bright, cheerful colors and educational toys. The layout includes separate zones for group activities, quiet reading, and outdoor play.",
    image: "/buildings/p17.jpg",
    tags: ["Educational", "Child-friendly", "Colorful"],
  },
  {
    title: "Luxury Bedroom Makeover",
    description:
      "Redefined comfort with textured walls, custom lighting, and cozy aesthetics. The makeover focuses on creating a peaceful sanctuary, with plush bedding, luxurious fabrics, and ambient lighting that promotes relaxation. Custom-built storage solutions help to maximize space while maintaining a clutter-free environment. Soft colors and natural materials are used to create a calming atmosphere, ideal for rest and rejuvenation.",
    image: "/buildings/p19.jpg",
    tags: ["Residential", "Luxury", "Comfort"],
  },
  {
    title: "Traditional Indian Living Room",
    description:
      "Timeless design combining heritage elements and modern functionality. The living room incorporates traditional Indian furnishings, intricate wood carvings, and rich textiles, with modern touches such as sleek furniture and contemporary lighting. The design aims to create a warm, inviting space that honors cultural heritage while meeting the practical needs of a modern family.",
    image: "/projects/p14.jpg",
    tags: ["Cultural", "Fusion", "Family Space"],
  },
  {
    title: "Terrace Lounge Space",
    description:
      "A rooftop oasis designed for leisure, dining, and entertainment. The terrace features comfortable seating, lush greenery, and ambient lighting, creating a relaxed outdoor retreat. A modular design allows the space to be adapted for different occasions, whether it's a casual gathering or an elegant dinner party. The use of weather-resistant materials ensures durability while maintaining aesthetic appeal.",
    image: "/projects/p15.jpg",
    tags: ["Outdoor", "Lounge", "Urban"],
  },
  {
    title: "Home Library & Study Room",
    description:
      "Custom cabinetry and moody lighting make this the ideal focus zone. The room is designed to foster concentration and productivity, with a large desk, built-in bookshelves, and cozy seating. Soft lighting and natural wood finishes create a warm and inviting atmosphere, making this space perfect for reading, studying, or creative work. The inclusion of soundproofing ensures a quiet and peaceful environment.",
    image: "/projects/p16.jpg",
    tags: ["Residential", "Productivity", "Elegant"],
  },
  {
    title: "Wedding Venue Decor",
    description:
      "Luxury event interior setup for intimate weddings and ceremonies. The design incorporates elegant floral arrangements, ambient lighting, and stylish furniture to create a romantic and sophisticated atmosphere. The space is tailored to reflect the couple's unique style, with customizable features such as drapery, centerpieces, and lighting effects to ensure the perfect setting for their special day.",
    image: "/projects/p17.jpg",
    tags: ["Event", "Luxury", "Romantic"],
  },
];

function page() {
  return (
    <section className="py-16 px-4 mt-20 bg-secondary/40 text-[#F8F8F8]">
      <motion.div
        className="bg-secondary text-black py-16 md:py-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
            Transform Your Space with Expert Interior Design
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#C0C0C0]">
            Discover how we bring your vision to life with our exceptional design solutions.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 text-sm sm:text-base md:text-lg text-[#C0C0C0] text-center px-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#D4AF37]">Residential Design</span>
            <span className="text-[#F8F8F8]">|</span>
            <span>Luxury Villas, Apartments, and more</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#D4AF37]">Commercial Design</span>
            <span className="text-[#F8F8F8]">|</span>
            <span>Offices, Retail, Hospitality</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#D4AF37]">Custom Solutions</span>
            <span className="text-[#F8F8F8]">|</span>
            <span>Personalized designs for every need</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase tracking-wider">
          Our Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex ${idx % 2 === 0 ? "flex-row-reverse bg-foreground text-secondary" : "flex-row bg-black text-foreground"} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 px-4 text-center md:text-left">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#D4AF37] text-[#0A0A0A] px-2 py-1 rounded-full"
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
