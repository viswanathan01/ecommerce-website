import React, { useState, useEffect } from "react";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    setTimeout(() => {
      setCarouselVisible(true);
    }, 500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 700);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches[0].clientX;
    setOffsetX(x - startX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (offsetX > 50) prevSlide();
    if (offsetX < -50) nextSlide();
    setOffsetX(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center overflow-hidden z-10 bg-[#e5e5e5] relative"
    >
    <div className="w-full flex justify-center overflow-hidden z-10 bg-[#e5e5e5] relative">
      <button
        onClick={prevSlide}
        className="absolute left-4 cursor-pointer top-1/2 transform -translate-y-1/2 md:block hidden hover:bg-opacity-100 transition-all duration-300 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 md:block hidden hover:bg-opacity-100 transition-all duration-300 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        className={`w-full max-w-[1200px] flex transition-all duration-700 ease-in-out ${
          carouselVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {products.map((product, index) => (
          <div
            key={product._id}
            className={`w-full min-w-full flex flex-col md:flex-row items-center transition-all duration-700 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%) scale(1.05)`,
              transition: isAnimating
                ? "transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.7s ease"
                : "none",
            }}
          >
            <div className="w-full md:w-1/2 p-6 md:p-12 flex justify-center">
              <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110 transform-gpu"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-12 ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4c2c1e] mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-[#6b4e2e] mb-6 opacity-80 hover:opacity-100">
                {product.description}
              </p>
              <Link to={`/product/${product._id}`} className="w-full">
                <button className="px-8 py-3 cursor-pointer bg-[#fdfbf4] text-[#4c2c1e] text-lg font-semibold rounded-lg shadow-md hover:bg-[#d4d4d4] hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default Carousel;
