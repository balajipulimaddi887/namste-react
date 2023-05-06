import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RESTAURANT_CDN_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getMenuDetails();
    }, []);

    async function getMenuDetails() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.5061743&lng=80.6480153&restaurantId=" + id + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }
    return (!restaurant) ? <Shimmer /> : (
    <div>
        <h1>Restaurant id: {id}</h1>
        <h1>{restaurant?.name}</h1>
        <img src={RESTAURANT_CDN_LINK + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.areaName}</h2>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoString}</h3>
    </div>
    )
}


export default RestaurantDetails;