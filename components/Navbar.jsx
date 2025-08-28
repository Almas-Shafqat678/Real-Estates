"use client"; 
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Residencies", href: "#residencies" },
    { name: "Our Value", href: "#our-value" },
    { name: "Contact Us", href: "#contact-us" },
    { name: "Get Started", href: "#get-started" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="relative inline-block font-bold text-3xl">
          Homyz
          <span className="absolute top-0 right-[-10px] w-3 h-3 bg-blue-500 rounded-full"></span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-blue-400 transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-blue-400 transition">
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
