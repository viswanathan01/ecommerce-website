import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            to={`/product/${id}`}
            className="block bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={image[0]}
                    alt={name}
                />
            </div>
            <div className="mt-3 ">
                <p className="text-sm font-bold text-[#475569] card-font ">{name}</p>
                <p className="text-sm font-bold text-green-500 mt-1">
                    {currency}{price}
                </p>
            </div>
        </Link>
    );
};

export default ProductItems;
