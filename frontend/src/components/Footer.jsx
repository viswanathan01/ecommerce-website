import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e5e5e5] text-[#4c2c1e] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-[#6b4e2e]">
              We are dedicated to providing the best products and services to
              our customers. Our mission is to make your life easier and more
              enjoyable.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-[#6b4e2e] hover:text-[#4c2c1e]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-[#6b4e2e] hover:text-[#4c2c1e]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#6b4e2e] hover:text-[#4c2c1e]">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#6b4e2e] hover:text-[#4c2c1e]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-[#6b4e2e]">Chennai, Tamilnadu, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+9940168951" className="text-[#6b4e2e] hover:text-[#4c2c1e]">
                 +91-99401-68951
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:nviswa192@gmail.com?subject=Inquiry&body=Hello" className="text-[#6b4e2e] hover:text-[#4c2c1e]">
                  nviswa192@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b4e2e] hover:text-[#4c2c1e]"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b4e2e] hover:text-[#4c2c1e]"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/__viswa__nathan__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b4e2e] hover:text-[#4c2c1e]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/viswanathan-rajasekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b4e2e] hover:text-[#4c2c1e]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4d4d4] mt-8 pt-8 text-center">
          <p className="text-[#6b4e2e]">
            &copy; {new Date().getFullYear()} VN SHOP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
