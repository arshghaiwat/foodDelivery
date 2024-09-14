import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Body rendered");
  const fetchData = async () => {
    const datas = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await datas.json();

    console.log(json);

    //optional chaining "?."
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return (<Shimmer/>);
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input className="search-box" type="text" value={searchText} onChange={(event)=>{
            setSearchText(event.target.value);
          }}></input>
          <button onClick={()=>{
            const filterList = listOfRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilterRestaurant(filterList);
          }}>Search</button>
          <div className="search-rating">
            <button
              className="filter-btn"
              onClick={() => {
                const filterList = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRatingString >= 4.3
                );
                setFilterRestaurant(filterList);
              }}
            >
              Filter By Rating
            </button>
          </div>
        </div>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList} /> */}
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
