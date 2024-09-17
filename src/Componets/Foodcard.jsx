import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/Slices/Cartslice";

function Foodcard({ img, desc, price, id, name, rating, handleonclick }) {
  const dispatch = useDispatch(); // Get dispatch from useDispatch hook

  const handleAddToCart = () => {
    dispatch(
      addtocart({
        name,
        price,
        img,
        id,
        qunty: 1,
        // This represents quantity
      })
    );
    handleonclick({ name });
  };

  return (
    <div>
      <div className="font-bold w-[250px] bg-white p-5 rounded-lg flex flex-col gap-3">
        <img
          className="hover:scale-110 w-auto h-[130px] transition-all cursor-grab"
          src={img}
          alt={name}
        />
        <div className="flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500">{price}$</span>
        </div>
        <p className="font-normal text-sm">{desc.slice(0, 50)}..</p>
        <div className="flex gap-2">
          {rating}
          <span>
            <FaStar className="text-yellow-300" />
          </span>
        </div>
        <button
          onClick={handleAddToCart} // Use the handler for dispatching
          className="p-2 hover:bg-green-400 bg-green-500 rounded-lg text-white font-bold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Foodcard;
