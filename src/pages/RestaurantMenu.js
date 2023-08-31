import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import { IMG_CDN_URL } from "../constant";

function RestaurantMenu() {
  const params = useParams();
  console.log(params);
  const { id } = params;
  const { name, cloudinaryImageId } = useRestaurant(108424);

  return (
    <div>
      <h1>RestaurantMenu Page</h1>
      <h2>id: {id}</h2>
      <div className="RestaurantMenuContainer">
        <div>Name: {name}</div>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      </div>
    </div>
  );
}

export default RestaurantMenu;
