"use client";
// pages/index.js (Homepage)
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Akruti Developers | Premium Real Estate Developers</title>
        <meta
          name="description"
          content="Premium real estate development company specializing in luxury residential and commercial properties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center bg-gradient-to-t from-blue-900 to-white"> */}
      <section className="relative h-screen flex items-center justify-center bg-[linear-gradient(to_top,_#1e3a8a_80%,_white_100%)]">
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80')",
          }}
        ></div> */}
        {/* <div className="absolute inset-0 opacity-20">
          <Image
            src="/project-5.jpeg"
            alt="Background"
            fill
            className="object-cover md:object-fit object-center"
            priority
          />
        </div> */}
        {/* <div className="absolute inset-0 opacity-20">
          <video
            src="/real estate vid 2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover md:object-fit object-center"
          />
        </div> */}

        <div className="absolute inset-0 opacity-20">
          {/* Desktop Video */}
          <video
            src="/real estate vid 2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover object-center"
          />

          {/* Mobile Video */}
          <video
            src="/real estate vid 0.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="block md:hidden w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Dreams, Creating Legacies
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Akruti Developers is a premier real estate development company
            specializing in luxury residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50 px-[15px] md:px-[32px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest and most prestigious developments that
              redefine luxury living and working spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative w-full h-64">
                <Image
                  src="/project-1.webp"
                  alt="Oceanview Residences"
                  fill
                  className="object-fit rounded-lg"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Oceanview Residences
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxury beachfront villas with panoramic ocean views and
                  premium amenities.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    Aundh, Pune
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Residential
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative w-full h-64">
                <Image
                  src="/project-2.avif"
                  alt="Oceanview Residences"
                  fill
                  className="object-fit rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Metro Business Plaza
                </h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art commercial complex in the heart of the
                  business district.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    Baner, Pune
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Commercial
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative w-full h-64">
                <Image
                  src="/project-3.jpeg"
                  alt="Oceanview Residences"
                  fill
                  className="object-fit rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Skyline Apartments
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern urban living with premium finishes and stunning city
                  views.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    Sangavi, Pune
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Residential
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-[15px] md:px-[32px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate development solutions tailored to your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Residential Development
              </h3>
              <p className="text-gray-600">
                Luxury homes, apartments, and communities designed for modern
                living.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Commercial Projects
              </h3>
              <p className="text-gray-600">
                Office spaces, retail centers, and mixed-use developments.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Construction Management
              </h3>
              <p className="text-gray-600">
                End-to-end project management ensuring quality and timely
                delivery.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001 1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Renovation & Restoration
              </h3>
              <p className="text-gray-600">
                Breathing new life into historic properties and modern upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-800 text-white px-[15px] md:px-[32px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Akruti Developers
              </h2>
              <p className="text-lg mb-6">
                With over 25 years of experience in the real estate industry,
                Akruti Developers has established itself as a leader in luxury
                development. Our commitment to quality, innovation, and customer
                satisfaction sets us apart.
              </p>
              <p className="text-lg mb-8">
                We take pride in our attention to detail, sustainable building
                practices, and creating spaces that enhance communities.
              </p>
              <Link
                href="/about"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80"
                  alt="Akruti Developers"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Showcase Video Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-[15px] md:px-[32px]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center max-w-6xl mx-auto transition-transform hover:scale-[1.01] duration-300">
            {/* Video Left */}
            <div className="w-full md:w-1/2 relative flex-shrink-0">
              <video
                src="/real estate vid 3.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/project-1.webp"
                className="w-full h-64 md:h-[420px] object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
              />
            </div>

            {/* Data Right */}
            <div className="w-full md:w-1/2 px-5 pt-5 md:px-10 md:pt-5 flex flex-col justify-center items-start text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Experience{" "}
                <span className="text-amber-600">Real Estate Excellence</span>
              </h2>

              <p className="text-gray-700 text-lg md:text-xl mb-6">
                Watch our showcase video to see how
                <span className="font-semibold text-blue-800">
                  {" "}
                  Akruti Developers{" "}
                </span>
                transforms visions into reality. Discover our commitment to
                <span className="text-amber-600 font-medium"> quality</span>,
                <span className="text-amber-600 font-medium"> innovation</span>,
                and{" "}
                <span className="text-amber-600 font-medium">
                  {" "}
                  customer satisfaction
                </span>{" "}
                in every project.
              </p>

              <ul className="mb-8 space-y-3 text-gray-700 text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-600 rounded-full"></span>
                  Premium residential & commercial spaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-600 rounded-full"></span>
                  Modern architecture & sustainable design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-600 rounded-full"></span>
                  Trusted by hundreds of happy clients
                </li>
              </ul>

              {/* <Link
          href="/projects"
          className="inline-block bg-amber-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:bg-amber-700 hover:shadow-lg transition-all duration-300"
        >
          Explore Our Projects
        </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-[15px] md:px-[32px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Johnson</h4>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Akruti Developers delivered beyond our expectations. Their
                attention to detail and quality craftsmanship is unmatched."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Williams</h4>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with Akruti Developers was a seamless experience. Their
                professionalism and expertise made our project a success."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Robert Chen</h4>
                  <p className="text-gray-600 text-sm">Investor</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The team at Akruti Developers understood our vision and brought
                it to life with exceptional quality and attention to detail."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate development needs. Our
            team is ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-amber-700 transition"
          >
            Get In Touch
          </Link>
        </div>
      </section> */}
      <ContactSection />
    </div>
  );
}
