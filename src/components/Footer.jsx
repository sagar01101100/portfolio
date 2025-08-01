// components/Footer.tsx
"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Centered Copyright */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} Sagar. All rights reserved.
      </div>

      {/* Right-side Social Icons */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-4 text-xl text-white">
        <a
          href="https://facebook.com/Sagar01101100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-blue-500" />
        </a>
        <a
          href="https://instagram.com/___s3r___"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-400" />
        </a>
        <a
          href="https://wa.me/7318723934"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="hover:text-green-400" />
        </a>
        <a
          href="https://github.com/sagar01101100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-300" />
        </a>
        <a
          href="https://linkedin.com/in/sagar01101100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600" />
        </a>
      </div>
    </>
  );
}
