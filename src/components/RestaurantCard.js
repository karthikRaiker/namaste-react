import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  thumbnail,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => (
  <div className="restro-card">
    <div className="restro-card-img">
      <img
        src={thumbnail ? thumbnail : IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
    </div>
    <div className="restro-card-content">
      <div>{name}</div>
      <div>Cuisines: {cuisines?.join(",")}</div>
      <div>Ratngs: {avgRating}</div>
    </div>
  </div>
);

export default RestaurantCard;
