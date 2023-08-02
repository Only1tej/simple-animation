import React from "react";
import { Spring } from "react-spring";

export default function Component1() {
  return (
    <Spring
      from={{ x: 0, opacity: 0, marginTop: -500 }}
      to={{ x: 100, opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ratione magnam nostrum a soluta reiciendis consequuntur corrupti
              modi quod placeat qui ut, quia doloremque obcaecati! Illum
              molestiae cum ex rerum?
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelBlue",
  color: "white",
  padding: "1.5rem",
};
