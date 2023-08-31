import "../../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/" className="Logo">
    <img
      src="https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg"
      alt="img"
    />
  </Link>
);

const Header = () => {
  const [isLogin, seIsLogin] = useState(false);

  return (
    <div className="Header">
      <Title />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About Us</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact Us</Link>
        </li>
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
