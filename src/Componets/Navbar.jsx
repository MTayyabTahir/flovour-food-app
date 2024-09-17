import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/Searchslice"; // Import the action

function Navbar() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="flex justify-between p-10 flex-col lg:flex-row 
      "
      >
        <div className="flex-col flex">
          <h3>{new Date().toUTCString().slice(0, 16)}</h3>
          <h1 className="font-extrabold text-3xl text-green-500">Flover </h1>
          <span className="text-2xl font-bold">Food</span>
        </div>
        <div>
          <input
            className="border-2 rounded-2xl border-green-500  w-96 p-2"
            type="search"
            id="search"
            placeholder="Search here"
            onChange={(e) => dispatch(setSearch(e.target.value))} // Updated here
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
