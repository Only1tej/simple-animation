import React from "react";
import { animated } from "react-spring";

const Menu = ({ style }) => {
  return (
    <>
      <animated.div className="nav-wrapper" style={style}>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Store</a>
          <a href="#">Tutorials</a>
        </nav>
      </animated.div>
    </>
  );
};

export default Menu;
