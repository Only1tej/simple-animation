import React from "react";
import { useSpring, animated } from "react-spring";
import { useGesture, useDrag } from "@use-gesture/react";

//Gesture for x axis(direction) alone (with fading effect i.e opacity )
const Gesture = () => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, delta }) => {
    if (down) api.start({ x: down ? delta[0] : 0 });
  });
  return (
    <animated.div
      style={{
        opacity: x.interpolate({
          map: Math.abs,
          range: [0, 200],
          output: [1, 0],
        }),
        transform: x.interpolate((x) => `translate3d(${x}px, 0 , 0)`),
      }}
      {...bind()}
      className="box"
    />
  );
};

export default Gesture;

//Gesture for both x and y axis
// const Gesture = () => {
//   const [{ xy }, api] = useSpring(() => ({ xy: [0, 0] }));

//   const bind = useDrag(({ down, delta }) => {
//     api.start({ xy: down ? delta : [0, 0] });
//   });
//   return (
//     <animated.div
//       style={{
//         transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
//       }}
//       {...bind()}
//       className="box"
//     />
//   );
// };
