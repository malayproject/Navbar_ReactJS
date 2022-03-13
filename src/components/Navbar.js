import React from "react";
import BrandName from "./BrandName";
import Pages from "./Pages";
import Social from "./Social";
import Burger from "./Burger";

const Navbar = ({ handleBurgerClick, mobMode, showPages }) => {
  return (
    <div className={`navbar ${showPages ? "pagesShown" : ""}`}>
      <BrandName />
      {mobMode ? (
        <Burger handleBurgerClick={handleBurgerClick} showPages={showPages} />
      ) : (
        <>
          <Pages mobMode={mobMode} showPages={showPages} />
          <Social />
        </>
      )}
    </div>
  );
};

export default Navbar;
