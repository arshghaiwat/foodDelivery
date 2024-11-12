import CategoryItemList from "./CategoryItemList";
import { useState } from "react";

//this is a controlled component because it is relying on the parent for what to do.
const RestaurantCategory = ({
  categoryData,
  showItems,
  setShowIndex,
  index,
}) => {
  const hancleClick = () => {
    setShowIndex();
  };

  return (
    <div className=" bg-gray-200 rounded-lg  px-3 py-3 mx-auto my-5 shadow-lg w-[75%]">
      <div
        className="cursor-pointer flex justify-between font-semibold "
        onClick={hancleClick}
      >
        {/* {console.log("print", categoryData?.card?.card)} */}
        {categoryData?.card?.card?.title}(
        {categoryData?.card?.card?.itemCards.length})<span>⬇️</span>
      </div>
      {console.log(showItems)}
      {showItems && <CategoryItemList data={categoryData} />}
    </div>
  );
};

export default RestaurantCategory;
