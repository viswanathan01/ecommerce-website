import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CollectionIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center py-8 text-3xl">
        <Title text1={"LIFESTYLE"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Elevate your style with our latest collection of sophisticated and
          trendsetting fashion.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-5">
        <div
          className="w-auto border p-6 flex flex-col justify-center items-start bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden relative group"
          style={{
            minHeight: "300px",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.collection_woman})`,
              zIndex: 1,
            }}
          ></div>

          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            style={{ zIndex: 2 }}
          ></div>

          <div className="relative z-10">
            <h1 className="text-2xl font-bold block text-white text-shadow-lg hover:text-shadow-xl transition-all duration-500">
              New Winter '24 Collection
            </h1>
            <p className="text-sm opacity-90 block text-gray-200 font-semibold mt-2 hover:opacity-100 hover:text-gray-100 transition-opacity duration-500">
              Catch the highlight in the roof
            </p>
            <Link to="./collection">
            <button className="mt-3 cursor-pointer bg-white text-gray-900 px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse">
              SHOP COLLECTION
            </button>
            </Link>
          </div>
        </div>

        <div
          className="w-auto border p-6 flex flex-col justify-center items-start bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden relative group"
          style={{
            minHeight: "300px",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.collection_man})`,
              zIndex: 1,
            }}
          ></div>

          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            style={{ zIndex: 2 }}
          ></div>

          <div className="relative z-10">
            <h1 className="text-2xl font-bold block text-white text-shadow-lg hover:text-shadow-xl transition-all duration-500">
              Trends of Pocket Shirts
            </h1>
            <p className="text-sm opacity-90 block text-gray-200 font-semibold mt-2 hover:opacity-100 hover:text-gray-100 transition-opacity duration-500">
              Pashe de Cartier Collection.
            </p>
            <Link to="./collection">
            <button  className="mt-3 cursor-pointer bg-white text-gray-900 px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse">
              SHOP COLLECTION
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionIntro;
