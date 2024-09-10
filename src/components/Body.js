
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Body rendered");
  const fetchData = async () => {

    const datas =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await datas.json();

    console.log(json);

    //optional chaining "?."
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }; 

  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return (<Shimmer/>);
  // }

  return listOfRestaurants.length === 0 ? (<Shimmer/>)  : 
  (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRatingString >= 4.3
            );
            setListOfRestaurants(filterList);
          }}
        >
          Search By Rating
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
