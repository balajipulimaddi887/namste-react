import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filterButton" 
                 onClick={() => {
                     const filterList = listOfRes.filter(res => res.data.avgRating > 4);
                     setListOfRes(filterList);
                 }}>Filter Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRes.map((res) => <RestaurantCard key={res.data.id} resData={res} />)}
            </div>
        </div>
    )
}

export default Body;