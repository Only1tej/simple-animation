import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";

const Accordion = () => {
  const [on, toggle] = useState(false);
  const [{ ref }, { height }] = useMeasure();
  console.log("height :>> ", height);
  const animation = useSpring({
    height: on ? height : 0,
  });

  return (
    <div>
      <button onClick={() => toggle(!on)}>Toggle</button>
      <div ref={ref}>
        <animated.div style={animation} className="accordion">
          <p>Hello I'm in the accordion</p>
        </animated.div>
      </div>
    </div>
  );
};

export default Accordion;
