import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Ordercard from "./Ordercard";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cart() {
  const cartitems = useSelector((state) => state.Cart.cart); // Fetch items from state
  const [active, setActive] = useState(true);
  const navigate = useNavigate(); // Initialize navigate hook
  const handledelete = () => toast.error("item removed from cart");

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`lg:w-[20vw] h-full bg-white fixed right-0 p-5 top-0 w-full leading-5 transform ${
          active
            ? "translate-x-full transition-transform duration-500"
            : "translate-x-0 transition-transform duration-500 z-50"
        }`}
      >
        <div className="flex justify-between align-baseline m-2">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <MdCancel
            onClick={() => {
              setActive(!active);
            }}
            className="font-bold border-2 rounded-md hover:bg-red-500 w-7 h-auto hover:text-white cursor-pointer"
          />
        </div>
        {cartitems.length > 0 ? (
          cartitems.map((food, index) => (
            <Ordercard
              key={index}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              quantity={food.quantity}
              handledelete={handledelete}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
        <div className="absolute bottom-0 mb-5 w-full">
          <h3 className="font-semibold text-gray-800">
            Items: {cartitems.length}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: $
            {cartitems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </h3>
          <hr className="w-[90%] mx-auto my-3" />
          <button
            className="p-2 hover:bg-green-400 bg-green-500 rounded-lg w-[90vw] lg:w-[18vw] text-white font-bold"
            onClick={() => navigate("/success")} // Navigate to the checkout page
          >
            Check out
          </button>
        </div>
      </div>
      <HiShoppingCart
        className="right-4 bottom-20 text-6xl border-2 rounded-full p-2 shadow-md fixed cursor-pointer bg-white"
        onClick={() => setActive(!active)}
      />
    </>
  );
}

export default Cart;
