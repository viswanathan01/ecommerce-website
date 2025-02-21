import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-8 max-w-3xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to our platform! We are passionate about delivering high-quality
          products and services that enhance your experience. Our team is dedicated to
          innovation, customer satisfaction, and continuous improvement.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Whether you're here to shop, explore, or connect, we are committed to making
          your journey seamless and enjoyable. Thank you for being a part of our
          community!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
