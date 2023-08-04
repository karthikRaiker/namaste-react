import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const RestroCard = ({ name, cruisine, img, star }) => (
  <div className="restro-card">
    <div className="restro-card-img">
      <img src={img} alt={name} />
    </div>
    <div className="restro-card-content">
      <div>{name}</div>
      <div>{cruisine.join(",")}</div>
      <div>{star} Star</div>
    </div>
  </div>
);

const Body = () => (
  <div className="Body">
    <div className="searchbar">
      <input type="text" placeholder="search restaurants.." />
    </div>
    <div className="restro-cardlist">
      {restaurantData.length > 0
        ? restaurantData.map((restaurant) => (
            <RestroCard key={restaurant?.id} {...restaurant} />
          ))
        : null}
    </div>
  </div>
);

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
