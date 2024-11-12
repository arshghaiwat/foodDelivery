import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;

  return (
    <div className="w-[300px] h-[450px]  bg-slate-100 rounded-lg whitespace-normal break-words hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-300 hover:scale-[1.03] transition-all duration-300 relative">
      <img
        className="w-full h-72 p-2 rounded-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      {/* <h3>{props.resName}</h3> */}
      <div className="ps-2">
        <h3 className="font-bold">{name}</h3>
        <div className="h-16 pt-2 pb-2 font-semibold italic">
          <h4>
            {cuisines.slice(0, 6).join(", ")}
            {cuisines.length > 6 && " & many more"}
          </h4>
        </div>
        {/* <h4>{props.cuisine}</h4>       */}
        <h4 className="font-medium ">Rating: {avgRatingString}</h4>
        <h4 className="font-medium ">{costForTwo}</h4>
        <h4 className="font-medium ">User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

//this is a HOC which takes one component and enhances it based on our requirements.
export const RestaurantToPromote = (RestaurantCard) => {
  return (props)=>{
    return(
      <div className="group">
        <label className="bg-black text-white font-semibold rounded-md px-2 py-1 absolute z-10 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:scale-[1.03]">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;