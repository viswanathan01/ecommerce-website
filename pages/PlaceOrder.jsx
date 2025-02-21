import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import SubTitle from "../components/SubTitle";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
  const [method,setMethod] =useState('cod');
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-15">
      <div className="flex flex-col sm:flex-row justify-evenly gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email" name="email"
            placeholder="Enter your email"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Zipcode"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number" name="phone"
            placeholder="Phone"
          />
        </div>
        <div className="mt-8">
          <div className="mt-8 flex items-left min-w-80">
            <CartTotal />
          </div>
          <div className="mt-12">
      <SubTitle text1={"PAYMENT"} text2={"METHOD"} />
      <div className="flex gap-3 flex-col lg:flex-row">
        
        <div onClick={() => setMethod("strip")} className="flex items-center border p-2 px-3 cursor-pointer">
          <p className={`w-4 h-4 border-2 rounded-full flex items-center justify-center`}>
            <span className={`w-3 h-3 rounded-full ${method === "strip" ? "bg-green-400" : ""}`}></span>
          </p>
          <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
        </div>

      
        <div onClick={() => setMethod("razorpay")} className="flex items-center border p-2 px-3 cursor-pointer">
          <p className={`w-4 h-4 border-2 rounded-full flex items-center justify-center`}>
            <span className={`w-3 h-3 rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></span>
          </p>
          <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
        </div>

    
        <div onClick={() => setMethod("cod")} className="flex items-center border p-2 px-3 cursor-pointer">
          <p className={`w-4 h-4 border-2 rounded-full flex items-center justify-center`}>
            <span className={`w-3 h-3 rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></span>
          </p>
          <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
        </div>

      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
