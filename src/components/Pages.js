import React, { useRef, useEffect } from "react";
import { PageItems } from "./NavItems";

const Pages = ({ mobMode, showPages }) => {
  const pagesEl = useRef(null);

  return (
    <div
      className={`pages${mobMode ? " mob" : ""}${
        showPages ? " shown" : " hidden"
      }`}
      ref={pagesEl}
    >
      {console.log(showPages)}
      {PageItems.map((item) => {
        return (
          <a href={item.url} key={item.id}>
            {item.text}
          </a>
        );
      })}
    </div>
  );
};

export default Pages;
