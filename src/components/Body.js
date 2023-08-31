import RestaurantCard from "./RestaurantCard";
// import { restaurantData } from "../constant";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
        <div className="searchBox-Container">
          <input
            className="searchBox"
            type="text"
            placeholder="search restaurants.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="crossBtn" onClick={handleClear}>
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
          filterData.map((restaurantData) => {
            console.log(restaurantData);
            return (
              <Link
                key={restaurantData?.info?.id}
                to={
                  "restaurant-menu/" +
                  restaurantData?.info?.feeDetails?.restaurantId
                }
              >
                <RestaurantCard {...restaurantData?.info} />
              </Link>
            );
          })
        ) : (
          <div>No Restaurant match your Filter! {searchText}</div>
        )}
      </div>
    </div>
  );
};

export default Body;
