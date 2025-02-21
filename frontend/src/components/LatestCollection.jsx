import React, { useContext ,useEffect , useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';
import { motion } from "framer-motion";

const LatestCollection = () => {
    const {products} =useContext(ShopContext) || {};
    const [ latestProducts, setLatestProducts]= useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-10"
    >
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"ARRIVALS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600' >
            Elevate your style with our latest collection of sophisticated and trendsetting fashion.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              latestProducts.map((item,index)=>(
                <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
        </div>
    </div></motion.div>
  )
}

export default LatestCollection