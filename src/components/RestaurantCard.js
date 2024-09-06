import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name,cuisines,avgRatingString,costForTwo } = resData?.info;

  return (
    <div className="res-card" /*style={styleCard}*/>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      ></img>
      {/* <h3>{props.resName}</h3> */}
      <h3>{name}</h3>
      <div className="cuisine">
      <h4>{cuisines.join(",")}</h4>
      </div>
      {/* <h4>{props.cuisine}</h4>       */}
      <h4>Rating: {avgRatingString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;