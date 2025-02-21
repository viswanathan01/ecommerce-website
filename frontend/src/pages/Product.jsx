import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";
import QuantitySelector from "../components/QuantitySelector";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [showDescription, setShowDescription] = useState(true);

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-15"
    >
      <motion.div variants={fadeInVariants} className="border-t-2 pt-10">
        <motion.div
          variants={fadeInVariants}
          className="flex gap-12 sm:gap-12 flex-col sm:flex-row"
        >
          <motion.div
            variants={fadeInVariants}
            className="flex-1 flex flex-col-reverse gap-3 sm:flex-row"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full"
            >
              {productData.image.map((item, index) => (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-shadow"
                />
              ))}
            </motion.div>
            <motion.div variants={fadeInVariants} className="w-full sm:w-[80%]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto rounded-lg shadow-lg"
                src={image}
                alt={productData.name}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInVariants} className="flex-1">
            <motion.h1
              variants={fadeInVariants}
              className="font-medium text-3xl mt-2 text-[#4c2c1e]"
            >
              {productData.name}
            </motion.h1>

            <motion.div
              variants={fadeInVariants}
              className="flex items-center gap-1 mt-2"
            >
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="w-5"
                />
              ))}
              <img src={assets.star_dull_icon} alt="star" className="w-5" />
              <p className="pl-2 text-[#6b4e2e]">(122)</p>
            </motion.div>

            <motion.p
              variants={fadeInVariants}
              className="mt-5 text-3xl font-bold text-green-500"
            >
              {currency}
              {productData.price}
            </motion.p>

            <motion.p
              variants={fadeInVariants}
              className="mt-5 text-[#6b4e2e] md:w-4/5"
            >
              {productData.description}
            </motion.p>

            <motion.div
              variants={fadeInVariants}
              className="flex flex-col gap-4 my-8"
            >
              <p className="text-xl font-semibold text-[#2e1b0f] tracking-wide uppercase">
                Select Size
              </p>

              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <motion.button
                    variants={fadeInVariants}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setSize(item)}
                    className={`cursor-pointer py-2 px-6 text-sm font-semibold rounded-full 
                    transition-all shadow-md border-2 duration-300 
                    ${
                      item === size
                        ? "border-green-600 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                        : "border-gray-300 bg-white text-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-green-600"
                    }`}
                    key={index}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <motion.button
                onClick={() => addToCart(productData._id, size, quantity)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 
              text-white font-semibold py-3 px-6 text-sm 
              rounded-full shadow-lg transform transition-all 
              hover:bg-gradient-to-l hover:from-emerald-600 hover:to-green-500 
              hover:scale-105 hover:shadow-xl active:scale-95 
              border-2 border-transparent hover:border-white duration-300"
              >
                ADD TO CART
              </motion.button>
            </motion.div>

            <hr className="mt-8 sm:w-4/5 border-[#d4d4d4]" />

            <div className="text-sm text-[#6b4e2e] mt-5 flex flex-col gap-1">
              <p>✅ 100% Original Product.</p>
              <p>✅ Cash On Delivery available.</p>
              <p>✅ Easy return and exchange within 7 days.</p>
            </div>
          </motion.div>
        </motion.div>

        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />

        <div className="mt-20">
          <div className="flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDescription(true)}
              className={`border px-5 py-3 text-sm cursor-pointer rounded-t-lg ${
                showDescription
                  ? "bg-[#4c2c1e] text-white"
                  : "bg-[#fdfbf4] text-[#4c2c1e]"
              }`}
            >
              Description
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDescription(false)}
              className={`border px-5 py-3 text-sm cursor-pointer rounded-t-lg ${
                !showDescription
                  ? "bg-[#4c2c1e] text-white"
                  : "bg-[#fdfbf4] text-[#4c2c1e]"
              }`}
            >
              Reviews (122)
            </motion.button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={showDescription ? "description" : "reviews"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border px-6 py-6 text-sm text-[#6b4e2e] rounded-b-lg bg-[white]"
            >
              {showDescription ? (
                <>
                  <h2 className="text-lg font-medium mb-4 text-[#4c2c1e]">
                    Product Description
                  </h2>
                  <p>{productData.description}</p>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-medium mb-4 text-[#4c2c1e]">
                    Customer Reviews
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-[#e5e5e5] p-4 rounded-lg">
                      <p className="font-medium">John Doe</p>
                      <p className="text-yellow-500">★★★★☆</p>
                      <p>
                        "I love this product! It's comfortable and fits
                        perfectly. Highly recommend!"
                      </p>
                    </div>
                    <div className="bg-[#e5e5e5] p-4 rounded-lg">
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-yellow-500">★★★★★</p>
                      <p>
                        "Amazing quality and fast delivery. Will definitely buy
                        again!"
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Product;
