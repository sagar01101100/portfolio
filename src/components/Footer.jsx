"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

// Define named social media links
const FACEBOOK = "https://facebook.com/Sagar01101100";
const INSTAGRAM = "https://instagram.com/___s3r___";
const WHATSAPP = "https://wa.me/7318723934";
const GITHUB = "https://github.com/sagar01101100";
const LINKEDIN = "https://linkedin.com/in/sagar01101100";

// Social icon configuration
const socialLinks = [
  { href: FACEBOOK, icon: <FaFacebook className="hover:text-blue-500" /> },
  { href: INSTAGRAM, icon: <FaInstagram className="hover:text-pink-400" /> },
  { href: WHATSAPP, icon: <FaWhatsapp className="hover:text-green-400" /> },
  { href: GITHUB, icon: <FaGithub className="hover:text-gray-300" /> },
  { href: LINKEDIN, icon: <FaLinkedin className="hover:text-blue-600" /> },
];

export default function Footer() {
  return (
    <>
      {/* Centered Copyright */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} Sagar. All rights reserved.
      </div>

      {/* Right-side Social Icons */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-4 text-xl text-white">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </>
  );
}
