import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../../constant";

function useRestaurant(restaurantId = 263485) {
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(`${FETCH_RESTAURANT_MENU_URL}${restaurantId}`);
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenuData(json?.data?.cards[0]?.card?.card?.info);
  };

  return { ...restaurantMenuData };
}

export default useRestaurant;
