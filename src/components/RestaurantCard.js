import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  thumbnail,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  feeDetails,
}) => (
  <div className="restro-card">
    <div className="restro-card-img">
      <img
        src={thumbnail ? thumbnail : IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
    </div>
    <div className="restro-card-content">
      <div className="name">{name}</div>
      <div className="cuisines">Cuisines: {cuisines?.join(",")}</div>
      <div className="ratings">Ratngs: {avgRating}</div>
      <div>Restaurant Id: {feeDetails?.restaurantId}</div>
    </div>
  </div>
);

export default RestaurantCard;
