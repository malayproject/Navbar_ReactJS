import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";

const Burger = ({ handleBurgerClick, showPages }) => {
  const burgerEl = useRef(null);

  return (
    <FaBars
      onClick={handleBurgerClick}
      className={`burger${showPages ? " clicked" : ""}`}
    />
  );
};

export default Burger;
