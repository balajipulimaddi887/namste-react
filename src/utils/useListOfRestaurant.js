import {useState, useEffect} from "react";

const useListOfRestaurant = () => {
    const [allRes, setAllRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    },[]);

    async function fetchRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();
        setAllRes(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRes(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRes, filterRes, setFilterRes];
}


export default useListOfRestaurant;