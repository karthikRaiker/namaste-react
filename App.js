import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Test from "./Test";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

/*
* -Header
*   -logo
*   -navbar
*     -home, aboutus, cart
* -Body
*   -searchbar
*   -RestroCard
*     -image
*     -name
*     -description
      -star rating
  -Footer
    -Links
    -ccopyRight
*/

const restaurantData = [
  {
    id: 1,
    name: "Mahaganapathy food",
    cruisine: ["South Indian", "Fresh"],
    star: "5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 2,
    name: "Srinivas food",
    cruisine: ["South Indian", "Spicy"],
    star: "5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 3,
    name: "Krishna food",
    cruisine: ["North Indian", "Fresh"],
    star: "5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 4,
    name: "Mahalaxmi food",
    cruisine: ["South Indian", "Fresh"],
    star: "4.5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 5,
    name: "Ganesh food",
    cruisine: ["North Indian", "Fresh"],
    star: "4.1",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 6,
    name: "Harish food",
    cruisine: ["North Indian", "Cold Drinks"],
    star: "3.6",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 7,
    name: "Mahaganapathy food",
    cruisine: ["South Indian", "Fresh"],
    star: "5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 8,
    name: "Srinivas food",
    cruisine: ["South Indian", "Spicy"],
    star: "5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 9,
    name: "Krishna food",
    cruisine: ["North Indian", "Fresh"],
    star: "5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 10,
    name: "Mahalaxmi food",
    cruisine: ["South Indian", "Fresh"],
    star: "4.5",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 11,
    name: "Ganesh food",
    cruisine: ["North Indian", "Fresh"],
    star: "4.1",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
  {
    id: 12,
    name: "Harish food",
    cruisine: ["North Indian", "Cold Drinks"],
    star: "3.6",
    img: "https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg",
  },
];

const Header = () => (
  <div className="Header">
    <div className="Logo">
      <img
        src="https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg"
        alt="img"
      />
    </div>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

const RestroCard = ({ brand, price, thumbnail, rating }) => (
  <div className="restro-card">
    <div className="restro-card-img">
      <img src={thumbnail} alt={brand} />
    </div>
    <div className="restro-card-content">
      <div>{brand}</div>
      <div>${price}</div>
      <div>{rating} Star</div>
    </div>
  </div>
);

const Body = () => {
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products/");
    setProducts(data?.products);
  };

  const filterOnRating = useMemo(() => {
    products.filter((product) => product.rating === rating, [products, rating]);
  });

  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };
  return (
    <div className="Body">
      {console.log(filterOnRating)}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Rating onClick={handleRating} initialValue={rating} />
        <button onClick={handleReset}>reset</button>
      </div>

      <div className="searchbar">
        <input type="text" placeholder="search restaurants.." />
      </div>
      <div className="restro-cardlist">
        {products.length > 0
          ? products.map((product) => (
              <RestroCard key={product?.id} {...product} />
            ))
          : null}
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <div>Footer Links</div>
    <div>Footer Copy Rights</div>
  </div>
);

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
