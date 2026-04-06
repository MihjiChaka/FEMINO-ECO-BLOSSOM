import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform">
            <Leaf size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-tight text-primary">Femino Eco Blossom</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/70">Environmental Consultancy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-1',
                location.pathname === link.path ? 'text-primary' : 'text-ink/70'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          <a
            href="mailto:fatnessngoma@gmail.com?subject=Quote Inquiry"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 border-b border-gray-50',
                  location.pathname === link.path ? 'text-primary' : 'text-ink/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-6 py-3 rounded-xl text-center font-medium mt-2"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { AnimatePresence } from 'motion/react';
