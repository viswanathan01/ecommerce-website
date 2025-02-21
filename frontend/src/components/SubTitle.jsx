import React from "react";
import { motion } from "framer-motion";

const SubTitle = ({ text1, text2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="inline-flex gap-2 items-center mb-4 relative"
    >
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-gray-700 text-lg sm:text-xl"
      >
        {text1}
        <span className="text-gray-800 font-medium ml-1">{text2}</span>
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-gray-500 to-gray-300 rounded-full"
      />

    
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -right-4 -top-2 w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full"
      />
    </motion.div>
  );
};

export default SubTitle;
