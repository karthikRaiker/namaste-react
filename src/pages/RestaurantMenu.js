import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import { IMG_CDN_URL } from "../constant";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function RestaurantMenu() {
  const params = useParams();
  console.log(params);
  const { id } = params;
  const { name, cloudinaryImageId, areaName, avgRating, cuisines } =
    useRestaurant(id);

  return (
    <>
      <Link to="/">Back</Link>
      <br></br>
      <Link to="/about/profile">Link to Profile under about</Link>
      <div className="RestaurantMenuContainer">
        <div>
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        </div>
        <div>
          <div>Restaurant Id: {id}</div>
          <div>Name: {name}</div>
          <div>Area name: {areaName}</div>
          <div>
            Cuisines:
            {cuisines?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </div>
          <div>
            Ratings: <Rating initialValue={avgRating} readonly /> {avgRating}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
