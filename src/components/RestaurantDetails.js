import { useParams } from "react-router-dom";
import { RESTAURANT_CDN_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const RestaurantDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const restaurant = useRestaurant(id);
  const restDetails = restaurant ? restaurant[0]?.card?.card?.info : null;
  const menu = restaurant
    ? restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    : null;
  const addItemToCart = (card) => {
    dispatch(addItem(card));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center">
        <img
          className="w-72 rounded-lg"
          src={RESTAURANT_CDN_LINK + restDetails?.cloudinaryImageId}
        />
        <div className="p-3">
          <h1 className="text-2xl">
            Restaurant id: <span className="font-bold">{id}</span>
          </h1>
          <h1 className="font-bold text-4xl">{restDetails?.name}</h1>
          <h2 className="text-xl">{restDetails?.areaName}</h2>
          <h3 className="font-normal text-log">
            {restDetails?.avgRating} stars
          </h3>
          <h3 className="italic text-lg">{restDetails?.costForTwoMessage}</h3>
        </div>
      </div>
      <div className="py-6 flex flex-col items-center">
        {menu && <h1 className="text-4xl underline">Menu</h1>}
        {menu.map((e, i) => {
          const card = e?.card?.card;
          if (card?.itemCards) {
            const itemCards = card?.itemCards;
            return (
              <div className="w-4/5 flex flex-col items-center" key={i}>
                <h1 className="font-bold text-2xl text-green-500">
                  {card?.title}
                </h1>
                {itemCards.map((e) => {
                  const card = e?.card?.info;
                  return <MenuItem key={card?.id} card={card} isAddButton />;
                })}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default RestaurantDetails;
