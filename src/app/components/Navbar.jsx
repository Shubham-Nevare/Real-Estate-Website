"use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

function Navbar() {
          const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  return (
   <>
    {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
           <Link href="/" className="flex justify-center items-center text-2xl font-bold text-gray-800 index-1">
             <img src="/akruti-logo.png" alt="akruti logo" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
              Akruti<span className="text-amber-600"> Developers</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 font-medium hover:text-amber-600 transition">Home</Link>
              <Link href="/about" className="text-gray-600 font-medium hover:text-amber-600 transition">About</Link>
              <Link href="/projects" className="text-gray-600 font-medium hover:text-amber-600 transition">Projects</Link>
              <Link href="/services" className="text-gray-600 font-medium hover:text-amber-600 transition">Services</Link>
              <Link href="/contact" className="text-gray-600 font-medium hover:text-amber-600 transition">Contact</Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation with Framer Motion */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden fixed top-18 right-0 z-50 h-full w-full rounded-l-2xl bg-white/30 backdrop-blur-lg shadow-2xl border-l border-white/40 flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
               
                <nav className="flex flex-col items-center gap-2 px-4 pb-8 mt-4">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/about', label: 'About' },
                    { href: '/projects', label: 'Projects' },
                    { href: '/services', label: 'Services' },
                    { href: '/contact', label: 'Contact' },
                  ].map(({ href, label }) => (
                    <motion.div
                      key={href}
                      whileHover={{ scale: 1.08, x: 8 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full"
                    >
                      <Link
                        href={href}
                        className="block w-full text-center rounded-lg py-3 text-xl font-bold text-gray-800 hover:text-white hover:bg-amber-500/90 transition-all duration-200 shadow-sm"
                        style={{ letterSpacing: '0.02em' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
        
   </>
  );
}

export default Navbar