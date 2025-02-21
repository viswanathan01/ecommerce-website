import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false); 
  const { getCartCount } = useContext(ShopContext);

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium z-0">
      <NavLink to="/">
        <img
          src={assets.logo}
          className={`w-8 cursor-pointer ${visible ? "hidden" : "block"}`}
          alt="logo-img"
        />
      </NavLink>


      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <SearchBar />

        <div
          className="group relative z-50"
          onMouseEnter={() => setProfileDropdownVisible(true)} 
          onMouseLeave={() => setProfileDropdownVisible(false)}
        >
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile-icon"
            onClick={toggleProfileDropdown} 
          />

          <div
            className={`${
              profileDropdownVisible ? "block" : "hidden"
            } absolute dropdown-menu right-0 pt-4`}
          >
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <Link to="">
                <p className="cursor-pointer hover:text-black">My profile</p>
              </Link>
              <Link to="/orders">
                <p className="cursor-pointer hover:text-black">Orders</p>
              </Link>
              <Link to="/login">
                <p className="cursor-pointer hover:text-black">LogIn</p>
              </Link>
            </div>
          </div>
        </div>


        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className={`w-5 cursor-pointer sm:hidden ${
            visible ? "hidden" : "block"
          }`}
          alt="menu-icon"
        />

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full z-50" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
  
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt="dropdown-icon"
              />
              <p>Back</p>
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 pr-6 text-gray-800 hover:text-black transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-700"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 pr-6 text-gray-800 hover:text-black transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-700"
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 pr-6 text-gray-800 hover:text-black transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-700"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 pr-6 text-gray-800 hover:text-black transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-700"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
