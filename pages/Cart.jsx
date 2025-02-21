import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, removeFromCart } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-20"
    >
      <div className="border-t pt-14">
        <div className="text-2xl mb-6">
          <Title text1={"MY"} text2={"CART"} />
        </div>

        <div>
          <AnimatePresence>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="py-4 border-t border-b bg-white shadow-md rounded-lg p-4 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300"
                >
                  <motion.img
                    className="w-16 sm:w-20 rounded-lg shadow-md hover:scale-105 transition-all duration-200"
                    src={productData.image[0]}
                    alt=""
                  />

                  <div className="flex-1">
                    <p className="text-sm sm:text-lg font-medium text-gray-800">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="text-lg font-semibold text-green-500">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-3 py-1 border bg-slate-100 text-sm rounded-md">
                        {item.size}
                      </p>
                    </div>
                  </div>

                  <div className="text-center font-medium text-lg">
                    {item.quantity}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    onClick={() => removeFromCart(item._id, item.size)}
                    className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <CartTotal cartData={cartData}/>;
      </div>
    </motion.div>
  );
};

export default Cart;
