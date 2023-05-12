import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const [allRes, filterRes, setFilterRes] = useListOfRestaurant();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>OOPs: No internet connection</h1>;
  }

  if (!allRes) return null;

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterList = allRes.filter((res) =>
              res.data.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            console.log(filterList);
            setFilterRes(filterList);
          }}
        >
          Search
        </button>
      </div>
      {allRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filterRes?.length === 0 ? (
            <h1> No resources found </h1>
          ) : (
            filterRes.map((res) => (
              <Link to={"restaurant/" + res.data?.id} key={res.data?.id}>
                <RestaurantCard resData={res} />
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
