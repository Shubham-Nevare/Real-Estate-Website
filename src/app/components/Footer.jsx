import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
     

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img src="/akruti-icon.png" alt="Akruti Logo" className="h-12 w-12 object-contain mr-3" />
                <div>
                  <h3 className="text-2xl font-bold">Akruti</h3>
                  <p className="text-amber-500 text-sm -mt-1 font-medium">Developers</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building exceptional spaces that inspire and endure for generations. 
                Quality craftsmanship and innovative designs since 2008.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.094.113.108.212.08.326-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b border-gray-700 inline-block">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b border-gray-700 inline-block">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Residential Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Commercial Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Construction Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Renovation & Restoration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Property Investment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b border-gray-700 inline-block">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Our Office</p>
                    <p className="text-gray-400">Aundh, Pune, Maharashtra 411007</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-gray-400">info@akrutidevelopers.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-lg mr-3 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
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
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-amber-500 transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-amber-500 transition duration-300">Sitemap</a>
              <span className="text-amber-500 font-medium">Made by Shubham</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;