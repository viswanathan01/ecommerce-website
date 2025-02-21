import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { motion } from "framer-motion";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const orderStatuses = ["Ready to Ship", "On the Way", "Out for Delivery", "Delivered"];
  const dummyOrders = products.slice(0, 3).map((item, index) => ({
    id: `ORD-${index + 1}`,
    product: item,
    quantity: Math.floor(Math.random() * 5) + 1,
    size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)],
    status: orderStatuses[index % orderStatuses.length],
  }));

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-15">
      <div className="border-t pt-16">
        <div className="text-center">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
        <div className="mt-8 grid gap-6">
          {dummyOrders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 border rounded-lg shadow-lg bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-20 h-20 object-cover rounded" src={order.product.image[0]} alt={order.product.name} />
                <div>
                  <p className="sm:text-lg font-semibold">{order.product.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-gray-700">
                    <p className="text-sm">Size: <span className="font-medium">{order.size}</span></p>
                    <p className="text-sm">Qty: <span className="font-medium">{order.quantity}</span></p>
                    <p className="text-sm">Total: <span className="font-medium">{currency}{(order.product.price * order.quantity).toFixed(2)}</span></p>
                  </div>
                  <p className="mt-2 text-sm font-medium text-red-500"><span className="text-md font-medium text-gray-500">Status:</span> {order.status}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                Track Order
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;