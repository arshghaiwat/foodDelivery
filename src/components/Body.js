import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList} /> */}
        { 
        resList != null ?
        (resList.map((restaurant) => {return (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)})) : null
        }
      </div>
    </div>
  );
};

export default Body;