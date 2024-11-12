import { CDN_URL } from "../utils/constants";

const CategoryItemList = (props) => {
  const { data } = props;
  // console.log(data);

  let categories = null;
  let itemCards = null;

  if (
    data?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  ) {
    categories = data?.card?.card?.categories;
    console.log("c", categories);
  } else if (
    data?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) {
    itemCards = data?.card?.card?.itemCards;
    // console.log("i", itemCards);
  }

  return (
    <div>
      {itemCards ? (
        <div>
          {itemCards.map((o) => {
            return (
              <div key={o?.card?.info?.id}className="flex justify-between p-3 border border-b-black">
                <div className="w-9/12">
                  <div className="font-medium">{o?.card?.info?.name}</div>{" "}
                  <div className="p-2 text-xs">
                    {o?.card?.info?.description}
                  </div>
                  <span className="italic font-medium">
                    Rs. {o?.card?.info?.price / 100}{" "}
                  </span>
                </div>
                <div className="w-3/12 p-4 relative">
                  <div className="absolute inset-x-0 flex justify-center">
                    <button className="bg-black text-white font-semibold rounded-md px-2 py-1 ">
                      Add +
                    </button>
                  </div>

                  <img
                    className="w-full"
                    src={CDN_URL + o?.card?.info?.imageId}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CategoryItemList;
