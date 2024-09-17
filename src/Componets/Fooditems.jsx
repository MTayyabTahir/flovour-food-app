import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../FoodData/FoodData";
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";

function Fooditems() {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleonclick = (e) => toast.success(`${e.name} added to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 mt-10 justify-center lg:justify-start ml-10">
        {FoodData.filter((Food) => {
          if (category === "All") {
            return Food.name.toLowerCase().includes(search.toLowerCase()); // Fixed here
          } else {
            return (
              category === Food.category &&
              Food.name.toLowerCase().includes(search.toLowerCase()) // Fixed here
            );
          }
        }).map((Food) => (
          <Foodcard
            key={Food.id}
            id={Food.id}
            price={Food.price}
            name={Food.name}
            desc={Food.desc}
            img={Food.img}
            rating={Food.rating}
            handleonclick={handleonclick}
          />
        ))}
      </div>
    </>
  );
}

export default Fooditems;
