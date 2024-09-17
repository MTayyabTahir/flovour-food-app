import React, { useEffect, useState } from "react";
import FoodData from "../FoodData/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setcategory } from "../redux/Slices/CategorySlice";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  const selectedCategory = useSelector((state) => state.category.category); // Get the selected category from Redux state

  const listUnique = () => {
    let uniqueCategories = [
      "All",
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUnique();
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="pl-10">
        <h3 className="font-semibold">Find the best food</h3>
        <div className="space-x-2 space-y-3">
          {categories.map((category, index) => (
            <button
              className={`bg-gray-200 rounded-lg py-2 px-3 hover:bg-green-500 hover:text-white ${
                category === selectedCategory ? "bg-green-500 text-white" : ""
              }`}
              key={index}
              onClick={() => dispatch(setcategory(category))}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
