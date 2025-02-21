import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { search, setSearch } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.trim() !== "") {
      navigate("/collection");
    }
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800 hover:text-gray-800 transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div
        className={`absolute right-0 bg-white shadow-lg rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered ? "w-64" : "w-0"
        }`}
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className={`w-full px-4 py-2 outline-none transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <button
            type="submit"
            className={`p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
