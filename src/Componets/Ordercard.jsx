import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

import {
  increaseQuantity,
  decreaseQuantity,
  removetocart,
} from "../redux/Slices/Cartslice";

function Ordercard({ img, price, name, id, quantity, handledelete }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity({ id }));
    }
  };

  const handleDelete = () => {
    dispatch(removetocart({ id }));
    handledelete();
  };

  return (
    <div className="flex bg-white shadow-2xl p-3 mt-3 rounded-lg items-center gap-4">
      <img
        src={img}
        alt={name}
        className="w-[50px] h-[50px] object-cover rounded"
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <RiDeleteBin5Line
            className="hover:text-red-400 cursor-pointer"
            onClick={handleDelete} // Dispatch delete action
          />
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-green-500 font-semibold">
            ${(price * quantity).toFixed(2)}
          </p>
          <div className="flex items-center gap-3">
            <FiPlus
              className="font-bold border-2 rounded-md hover:bg-green-500 w-5 h-auto hover:text-white cursor-pointer"
              onClick={handleIncrease} // Dispatch increase quantity action
            />
            <span className="font-bold text-xl">{quantity}</span>
            <FaMinus
              className={`font-bold border-2 rounded-md hover:bg-green-500 w-5 h-auto hover:text-white cursor-pointer ${
                quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleDecrease}
              // Dispatch decrease quantity action
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordercard;
