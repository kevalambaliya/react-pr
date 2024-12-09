import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="div">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/product" className="link">
        Product
      </Link>
      <Link to="/purchase" className="link">
        Purchase
      </Link>
      <Link to="/buy" className="link">
        Buy
      </Link>
    </div>
  );
};

export default Navbar;
