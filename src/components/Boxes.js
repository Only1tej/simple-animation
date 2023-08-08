import React, { useState, useRef } from "react";
import { animated, useTrail, useSpring } from "react-spring";

const items = [0, 1, 2, 3, 4];
// const items = [0.5, 0.3, 0.2, 0.7, 1]; (items used as the vale for the 'to' opacity)

const Boxes = () => {
  const [on, toggle] = useState(false);
  const springRef = useRef();
  const spring = useSpring({
    size: on ? "100%" : "20%",
  });
  const transitionRef = useRef();
  const trail = useTrail(items.length, {
    ref: transitionRef,
    opacity: on ? 1 : 0,
    transform: on ? "scale(1)" : "scale(0)",
  });
  return (
    <div className="boxes-grid-two" onClick={() => toggle(!on)}>
      {trail.map((animation) => (
        <animated.div className="box-two" style={animation} />
      ))}
    </div>
  );
};

export default Boxes;

// For useSprings
// import React from "react";
// import { animated, useSprings } from "react-spring";

// const items = [0, 1, 2, 3, 4];
// // const items = [0.5, 0.3, 0.2, 0.7, 1]; (items used as the vale for the 'to' opacity)

// const Boxes = () => {
//   const springs = useSprings(
//     items.length,
//     items.map((item) => ({
//       from: {
//         opacity: 0,
//       },
//       to: {
//         opacity: 1,
//       },
//     }))
//   );
//   return (
//     <div className="boxes-grid">
//       {springs.map((animation) => (
//         <animated.div className="box" style={animation} />
//       ))}
//     </div>
//   );
// };

// export default Boxes;

//For useTrail
// import React, { useState } from "react";
// import { animated, useTrail } from "react-spring";

// const items = [0, 1, 2, 3, 4];
// // const items = [0.5, 0.3, 0.2, 0.7, 1]; (items used as the vale for the 'to' opacity)

// const Boxes = () => {
//   const [on, toggle] = useState(false);
//   const trail = useTrail(items.length, {
//     opacity: on ? 0 : 1,
//     transform: on ? "scale(0.3)" : "scale(1)",
//   });
//   return (
//     <div className="boxes-grid">
//       <button onClick={() => toggle(!on)}>Toggle</button>
//       {trail.map((animation) => (
//         <animated.div className="box" style={animation} />
//       ))}
//     </div>
//   );
// };

// export default Boxes;
