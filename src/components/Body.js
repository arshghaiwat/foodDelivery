import RestaurantCard, { RestaurantToPromote } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);
  // const [hasIndianCuisine, SetIndianCuisine] = useState(false);

  const IndianRestaurantCard = RestaurantToPromote(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body rendered");
  //console.log(listOfRestaurants);
  //console.log(filterRestaurant);

  const fetchData = async () => {
    const datas = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await datas.json();

    //optional chaining "?."
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>you are offline buddy!</h1>;
  }
  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return (<Shimmer/>);
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex gap-0 mt-6 mb-10 mx-8">
        <div className="flex gap-2 ">
          <input
            className="border border-black rounded-md px-2"
            placeholder="Search Restaurant"
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button
            className="h-8 w-14 border border-black bg-green-200 rounded-md"
            onClick={() => {
              const filterList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilterRestaurant(filterList);
            }}
          >
            Search
          </button>
          <input
            className="border border-black p-1 rounded-md"
            placeholder="enter username"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="ml-7">
          <button
            className="border border-black h-8 bg-gray-300 rounded-md px-1"
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
      {console.log("return")}
      <div className="m-auto flex gap-7 flex-wrap justify-center">
        {/* <RestaurantCard resData={resList} /> */}
        {/* {filterRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })} */}
        {/* //to promote indian restaurant */}
        {filterRestaurant.map((restaurant) => {
          const hasIndianCuisine = restaurant?.info?.cuisines.some(
            (cuisine) => {
              return cuisine.toLowerCase().includes("indian");
              //to check for indian restaurants
            }
          );
          return hasIndianCuisine ? (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <IndianRestaurantCard resData={restaurant} />
            </Link>
          ) : (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
