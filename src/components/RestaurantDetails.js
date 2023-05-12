import { useParams } from "react-router-dom";
import { RESTAURANT_CDN_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h1>{restaurant?.name}</h1>
      <img src={RESTAURANT_CDN_LINK + restaurant?.cloudinaryImageId} />
      <h2>{restaurant?.areaName}</h2>
      <h3>{restaurant?.avgRating} stars</h3>
      <h3>{restaurant?.costForTwoString}</h3>
    </div>
  );
};

export default RestaurantDetails;
