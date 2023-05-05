import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);
    const [allRes, setAllRes] = useState([])
    const [filterRes, setFilterRes] = useState([])
    const [searchTxt,setSearchTxt] = useState("");
    console.log("outside useEffect");


    useEffect(() => {
        fetchRestaurants();
    },[]);

    async function fetchRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();
        setAllRes(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRes(json?.data?.cards[2]?.data?.data?.cards);
        console.log(allRes);
    }

    if (!allRes) return null;


    return(<div className="body">
            <div className="search">
                <input type="text" className="search-input" placeholder="search" value={searchTxt}
                onChange={e => {
                    setSearchTxt(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    const filterList = allRes.filter(res => res.data.name.toLowerCase().includes(searchTxt.toLowerCase()));
                    console.log(filterList);
                    setFilterRes(filterList);
                }}>Search</button>
            </div>
            {allRes?.length === 0 ?  <Shimmer /> :
            <div className="res-container">
                {filterRes?.length === 0 ? <h1> No resources found </h1> : filterRes.map((res) => <RestaurantCard key={res.data.id} resData={res} />)}
            </div>
}
        </div>)
}

export default Body;