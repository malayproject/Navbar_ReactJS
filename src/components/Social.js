import React from "react";
import { SocialItems } from "./NavItems";

const Social = () => {
  return (
    <div className="social">
      {SocialItems.map((item) => {
        return (
          <a href={item.url} key={item.id}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
