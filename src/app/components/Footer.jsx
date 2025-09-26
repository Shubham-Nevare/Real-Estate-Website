import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiX } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12 mx-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="/akruti-icon.png"
                  alt="Akruti Developers Logo"
                  className="h-12 w-12 object-contain mr-3"
                />
                <div>
                  <h3 className="text-2xl font-bold">Akruti Developers</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building exceptional spaces that inspire and endure for
                generations. Quality craftsmanship and innovative designs since
                2008.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                {/* X (Twitter) */}
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-black w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group"
                  aria-label="X"
                >
                  <FiX className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b border-gray-700 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b border-gray-700 inline-block">
                Our Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Residential Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Commercial Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Construction Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Renovation & Restoration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Property Investment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b border-gray-700 inline-block">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Our Office</p>
                    <p className="text-gray-400">
                      Aundh, Pune, Maharashtra 411007
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-gray-400">info@akrutidevelopers.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-400">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Akruti Developers. All Rights Reserved.
              </p>
            </div>
            <span className="text-amber-500 font-medium">Made by Shubham</span>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-amber-500 transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
