"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F8F8F8] pt-10 border-t border-[#C0C0C0]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section - Brand & About */}
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="TAW Designs Logo"
              width={100}
              height={100}
              className="w-auto h-24 md:h-24"
            />
            <span className="text-lg md:text-2xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-tight">
              TAW <br /> DESIGNS
            </span>
          </Link>
          <p className="text-sm mt-3 text-[#C0C0C0]">
            TAW Designs Pvt. Ltd. – Leading Pune-based architectural firm
            delivering smart, eco-friendly, and cost-effective residential and
            commercial design solutions.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/pages/about" },
              { label: "Services", href: "/pages/services" },
              { label: "Projects", href: "/pages/projects" },
              { label: "Contact Us", href: "/pages/contact" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#D4AF37]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">Contact</h3>
          <div className="mt-3 space-y-2 text-sm text-[#C0C0C0]">
            <p className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-[#D4AF37]" />
              <a
                href="mailto:info@tawdesigns.com"
                className="hover:text-[#F8F8F8]"
              >
                info@tawdesigns.com
              </a>
            </p>
            <p className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-[#D4AF37]" />
              +91 9876543210
            </p>
            <p className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-[#D4AF37]" />
              Pune, Maharashtra, India
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-5 text-[#D4AF37]">
            Follow Us
          </h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-[#C0C0C0] hover:text-[#D4AF37]">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#C0C0C0] hover:text-[#D4AF37]">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm bg-[#1F1F1F] text-[#C0C0C0] mt-8 border-t border-[#C0C0C0] py-8">
        © {new Date().getFullYear()} TAW Designs Pvt. Ltd. | Smarter Layouts,
        Larger Possibilities
      </div>
    </footer>
  );
};
