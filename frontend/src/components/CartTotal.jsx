import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import SpecialButton from "./SpecialButton";

const CartTotal = () => {
  const location = useLocation();
  const isPlaceOrderPage = location.pathname === "/place-order";
  const { products, currency, cartItems, delivery_fee } = useContext(ShopContext);

  const cartArray = Object.entries(cartItems).flatMap(([productId, sizes]) =>
    Object.entries(sizes).map(([size, quantity]) => ({
      _id: productId,
      size,
      quantity,
    }))
  );


  const subtotal = cartArray.reduce((total, item) => {
    const product = products.find((p) => p._id === item._id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const total = (subtotal + delivery_fee).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 flex justify-end"
    >
      <div className="p-4 bg-white rounded-lg shadow-md w-64">
        
        <div className="flex justify-between text-gray-700 text-lg font-medium">
          <p>Subtotal:</p>
          <p>{currency}{subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between text-gray-700 text-lg font-medium mt-1">
          <p>Shipping:</p>
          <p>{currency}{delivery_fee.toFixed(2)}</p>
        </div>

        <div className="border-t my-2"></div>

        <div className="flex justify-between text-xl font-bold text-gray-900">
          <p>Total:</p>
          <p>{currency}{total}</p>
        </div>

        
        <SpecialButton isPlaceOrderPage={isPlaceOrderPage} />
      </div>
    </motion.div>
  );
};

export default CartTotal;
