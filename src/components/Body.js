import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
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
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="border-black border rounded focus pl-1"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="bg-green-800 p-1 mx-2 rounded-lg text-white"
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
        <div className="flex flex-wrap justify-center">
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
