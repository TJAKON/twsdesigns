import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section - Brand & About */}
        <div>
          <Image
            alt="TAW Designs Logo"
            src="/logo.jpg"
            width={100}
            height={100}
            className="w-40 h-auto"
          />
          <p className="text-sm mt-3">
            TAW Designs Pvt. Ltd. – Leading Pune-based architectural firm
            delivering smart, eco-friendly, and cost-effective residential and
            commercial design solutions.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-600">
                Projects
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-gray-600">
                Our Team
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-600" />
              <a
                href="mailto:info@tawdesigns.com"
                className="hover:text-gray-600"
              >
                info@tawdesigns.com
              </a>
            </p>
            <p className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-600" />
              +91 9876543210
            </p>
            <p className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-gray-600" />
              Pune, Maharashtra, India
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-5">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} TAW Designs Pvt. Ltd. | Smarter Layouts,
        Larger Possibilities
      </div>
    </footer>
  );
};
