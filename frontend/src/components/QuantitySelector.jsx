import React from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const fadeInVariants = {
  hover: { scale: 1.08 },
  tap: { scale: 0.92 },
};

const QuantitySelector = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col gap-3 my-6">
      <p className="text-xl font-semibold text-[#2e1b0f] tracking-wide uppercase block">
        Quantity
      </p>

      <div className="flex items-center gap-4">
        <motion.button
          variants={fadeInVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={decreaseQuantity}
          className="cursor-pointer p-2 px-2 text-sm font-semibold rounded-full transition-all shadow-md border-2 duration-300
           border-gray-300 bg-white text-gray-800 
           hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 
           hover:text-white hover:border-green-600"
        >
          <Minus size={18} />
        </motion.button>

        <motion.span
          key={quantity}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-10 text-center text-lg font-bold"
        >
          {quantity}
        </motion.span>

        <motion.button
          variants={fadeInVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={increaseQuantity}
          className="cursor-pointer p-2 px-2 text-sm font-semibold rounded-full transition-all shadow-md border-2 duration-300
           border-gray-300 bg-white text-gray-800 
           hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 
           hover:text-white hover:border-green-600"
        >
          <Plus size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default QuantitySelector;
