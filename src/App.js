import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./components/Toggle";
import Routess from "./components/Routess";
import Modal from "./components/Modal";
import Transition from "./components/Transition";
import Menu from "./components/Menu";
import Accordion from "./components/Accordion";
import Waypoints from "./components/Waypoints";
import Gesture from "./components/Gesture";
import Boxes from "./components/Boxes";
import Checkout from "./components/Checkout";
import logo from "./logo.jpg";
import "./App.css";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`,
  });
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <animated.div className="App">
      {/* style={fade} */}
      <header className="App-header">
        <img src={logo} className="logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
        {/* <Menu style={navAnimation} /> */}
      </header>
      <main>
        {/* <Toggle />  */}
        {/* <Routess /> */}
        {/* <Transition /> */}
        <Modal />
        <Accordion />
        {/* <Gesture /> */}
        <Boxes />
        {/* <Waypoints /> */}
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;
