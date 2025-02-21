import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { motion } from "framer-motion";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products,search, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(search){
      productsCopy=productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search]);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mb-10 border-t">
        <motion.div
          className="min-w-60"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              alt=""
            />
          </motion.p>

          <motion.div
            className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium">CATOGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-600 text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value={"Men"}
                  id="menIn"
                />
                <label htmlFor="menIn" className="cursor-pointer">
                  Men
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value={"Women"}
                  id="WomenIn"
                />
                <label htmlFor="WomenIn" className="cursor-pointer">
                  Women
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value={"Kids"}
                  id="kidsIn"
                />
                <label htmlFor="kidsIn" className="cursor-pointer">
                  Kids
                </label>
              </p>
            </div>
          </motion.div>

          <motion.div
            className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-600 text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value={"Topwear"}
                  id="TopwearIn"
                />
                <label htmlFor="TopwearIn" className="cursor-pointer">
                  Topwear
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value={"Bottomwear"}
                  id="BottomwearIn"
                />
                <label htmlFor="BottomwearIn" className="cursor-pointer">
                  Bottomwear
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value={"Winterwear"}
                  id="WinterwearIn"
                />
                <label htmlFor="WinterwearIn" className="cursor-pointer">
                  Winterwear
                </label>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            className="flex justify-between text-base sm:text-2xl mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Title text1={"ALL"} text2={"COLLECTION"} />

            <motion.select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2 h-9"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <option value="relavent">Sort By: Relavent</option>
              <option value="low-high">Sort By: Low-High</option>
              <option value="high-low">Sort By: High-Low</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="my-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {filterProducts.map((item, index) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductItems
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
