import RestaurantCard from "./RestaurantCard";
// import { restaurantData } from "../constant";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filterData, setFilterData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  //  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    let data = handleSearch(searchText, restaurantData);
    setFilterData(data);
  }, [searchText]);

  const handleSearch = (searchText, restaurantData) => {
    console.log("trigger");
    return restaurantData.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const fetchRestaurants = async () => {
    // const {
    //   data: { Restaurants },
    // } = await axios.get("https://dummyjson.com/Restaurants");
    let data1 = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(
      data1.data?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantData(
      data1.data?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      data1.data?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleClear = () => setSearchText("");

  // if (!restaurantData) return null;
  return restaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="searchbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <input
            className="searchBox"
            type="text"
            placeholder="search restaurants.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span
            style={{
              position: "absolute",
              right: "1rem",
              top: "0.5rem",
              color: "red",
              cursor: "pointer",
            }}
            onClick={handleClear}
          >
            X
          </span>
        </div>

        <button
          className="btn"
          style={{ borderRadius: "0 5px 5px 0" }}
          onClick={() => {
            let data = handleSearch(searchText, restaurantData);
            setFilterData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restro-cardlist">
        {filterData?.length > 0 ? (
          filterData.map((restaurantData, index) => {
            return <RestaurantCard key={index} {...restaurantData?.info} />;
          })
        ) : (
          <div>No Restaurant match your Filter! {searchText}</div>
        )}
      </div>
    </div>
  );
};

export default Body;
