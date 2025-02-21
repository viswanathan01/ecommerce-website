import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';
import { motion } from "framer-motion";

const BestSeller = () => {
    const {products} =useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
    },[])

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="my-10"
  >
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Elevate your style with our latest collection of sophisticated and trendsetting fashion.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
    </div>
    </motion.div> 
  )

}

export default BestSeller