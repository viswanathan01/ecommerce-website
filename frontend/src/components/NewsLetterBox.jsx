import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center items-center p-8"
    >
      <div className="w-full flex justify-center items-center p-8">
        <div
          className={`w-full max-w-[600px] bg-gradient-to-r from-[#f5f5f5] to-[#e5e5e5] rounded-xl shadow-2xl p-8 transition-all duration-500 ease-in-out ${
            isHovered ? "transform scale-105" : "transform scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 className="text-3xl font-bold text-[#4c2c1e] mb-4 text-center animate-float">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-[#6b4e2e] mb-6 text-center opacity-80 animate-float-delay">
            Get the latest updates, exclusive offers, and more!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-3/4 px-4 py-3 rounded-lg border border-[#d4d4d4] focus:outline-none focus:border-[#4c2c1e] transition-all duration-300 hover:shadow-md"
              required
            />
            <button
              type="submit"
              className="cursor-pointer w-full md:w-1/4 px-6 py-3 bg-gradient-to-r from-[#4c2c1e] to-[#6b4e2e] text-white font-semibold rounded-lg hover:from-[#6b4e2e] hover:to-[#4c2c1e] hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <div className="mt-4 text-center text-green-600 font-semibold animate-fadeIn">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterBox;
