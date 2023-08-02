import React, { Component } from "react";
import { Spring } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ x: 0, opacity: 0 }}
        to={{ x: 100, opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ratione magnam nostrum a soluta reiciendis consequuntur corrupti
                modi quod placeat qui ut, quia doloremque obcaecati! Illum
                molestiae cum ex rerum?
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateBlue",
  color: "white",
  padding: "1.5rem",
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0",
};

export default Component2;
