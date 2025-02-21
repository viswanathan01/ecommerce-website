import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ProductInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      img: assets.free_shipping,
      title: "Free Shipping",
      description: "For all Orders over $100",
    },
    {
      img: assets.returns,
      title: "30 Days Returns",
      description: "For an Exchange Product",
    },
    {
      img: assets.secured_payment,
      title: "Secured Payment",
      description: "Payment Cards Accepted",
    },
    {
      img: assets.support,
      title: "Support 24/7",
      description: "Contact Us Anytime",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-[50px] my-[50px]"
    >
      <div className="mx-[50px] my-[50px]">
        <div className="hidden md:flex justify-around items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                className="w-auto mt-2"
                src={feature.img}
                alt={feature.title}
              />
              <p className="font-semibold text-lg font-sans">{feature.title}</p>
              <p className="font-normal text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col items-center text-center">
          <div className="relative w-full">
            <img
              className="w-auto mx-auto mt-2"
              src={features[currentIndex].img}
              alt={features[currentIndex].title}
            />
            <p className="font-semibold text-lg font-sans mt-2">
              {features[currentIndex].title}
            </p>
            <p className="font-normal text-gray-500">
              {features[currentIndex].description}
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
