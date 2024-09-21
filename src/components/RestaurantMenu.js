import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return (
      <div>
        <h1>idsfhdkf</h1>
        <Shimmer />
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  let itemCardsFirst = null;
  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const regularCards2 =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.categories?.[0];
  const regularCards3 =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  if (regularCards?.itemCards) {
    itemCardsFirst = regularCards;
  } else if (regularCards2?.itemCards) {
    itemCardsFirst = regularCards2;
  } else if (regularCards3?.itemCards) {
    itemCardsFirst = regularCards3;
  }

  let itemCards = null;

  try {
     ({ itemCards } = itemCardsFirst);
  } catch (error) {
    return( <div><h1>not able to get data at the moment</h1></div>);
  }

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
        {/* {i can use defaultPrice also if price not available in data} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
