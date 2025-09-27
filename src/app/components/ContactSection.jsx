"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email format.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("✅ Thank you for contacting us! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white relative px-[15px] md:px-[32px]">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-14">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
              Let’s Build Something Great Together
            </h2>
            <p className="text-base md:text-lg mb-6 max-w-xl text-gray-200">
              Have a project in mind? We’d love to hear from you. Reach out and
              let’s start turning your vision into reality.
            </p>
            <div className="space-y-2 text-gray-300 text-sm md:text-base">
              <p>📍 Mumbai, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@akruti-developers.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <form
              className="max-w-lg mx-auto p-6 md:p-7 bg-white text-gray-800 rounded-xl shadow-xl relative overflow-hidden"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-amber-500 to-pink-500"></div>

              <h3 className="text-xl md:text-2xl font-bold mb-5 text-gray-900">
                Contact Us
              </h3>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Name
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-amber-500 transition">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Email
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-amber-500 transition">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Message
                </label>
                <div className="flex items-start border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-amber-500 transition">
                  <FaRegCommentDots className="text-gray-400 mt-2 mr-2" />
                  <textarea
                    name="message"
                    value={form.message}
                    placeholder="Type your message here..."
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-transparent outline-none resize-none text-sm"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm md:text-base hover:bg-amber-700 transition transform hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>

              {/* Success Message */}
              {success && (
                <p className="text-green-600 text-sm mt-3">{success}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
