import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants,setListOfRestaurants] = useState(resList);
 
  
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=>{
          const filterList = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRatingString >= 4.3);
          setListOfRestaurants(filterList);
        }}>Search By Rating</button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList} /> */}
        {listOfRestaurants != null
          ? listOfRestaurants.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Body;
