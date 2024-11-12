import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return (
      <div>
        <h1>This page is loading</h1>
        <Shimmer />
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const restaurantItemData =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const RestaurantCategories = restaurantItemData.filter((category) => {
    return (
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <>
      <div className="text-center font-bold">
        <div className="m-5 text-2xl">{name}</div>
        <div className="m-5 text-xl">
          {cuisines.join(",")} - {costForTwoMessage}
        </div>
      </div>
      <div>
        {RestaurantCategories.map((category, index) => (
          <RestaurantCategory
            key={index}
            categoryData={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
