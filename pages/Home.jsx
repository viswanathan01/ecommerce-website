import React from "react";
import Carousel from "../components/Carousel";
import LatestCollection from "../components/LatestCollection";
import ProductInfo from "./ProductInfo";
import BestSeller from "../components/BestSeller";
import NewsLetterBox from "../components/NewsLetterBox";
import CollectionIntro from "../components/CollectionIntro";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
        <LatestCollection />
        <BestSeller />
        <CollectionIntro />
        <ProductInfo />   
      </div>
      <NewsLetterBox />
    </>
  );
};

export default Home;
