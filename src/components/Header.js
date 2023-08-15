import "../../index.css";
import { useState } from "react";

const Title = () => (
  <a href="/" className="Logo">
    <img
      src="https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg"
      alt="img"
    />
  </a>
);

const Header = () => {
  const [isLogin, seIsLogin] = useState(false);

  return (
    <div className="Header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button
        className="btn"
        onClick={() => seIsLogin((prevState) => !prevState)}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
