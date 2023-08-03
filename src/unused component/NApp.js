import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import Component1 from "./unused component/components/Component1";
import Component2 from "./unused component/components/Component2";
import Component3 from "./unused component/components/Component3";
import Menu from "./components/Menu";

const App = () => {
  const [showComponent3] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`,
  });

  // toggle = (e) => {
  //   showComponent3: !showComponent3;
  // };

  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
      <Menu style={navAnimation} />
    </div>
  );
};

export default App;

{
  /* <Component2 toggle={toggle} />
      <Transition
        native
        items={showComponent3}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(show) =>
          show &&
          ((props) => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))
        }
      </Transition> */
}
