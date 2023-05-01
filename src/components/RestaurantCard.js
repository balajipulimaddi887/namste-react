import { RESTAURANT_CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.data;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo"
            src={RESTAURANT_CDN_LINK + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;