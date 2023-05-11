import { useState, useEffect } from 'react';

const useRestaurant = resId => {
    
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getMenuDetails();
    }, []);

    async function getMenuDetails() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.5061743&lng=80.6480153&restaurantId=" + resId + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }

    return restaurant;
}

export default useRestaurant;