import React from "react";
import { useSpring, animated } from "react-spring";
import { useGesture, useDrag } from "@use-gesture/react";

const Gesture = () => {
  const [{ xy }, api] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useDrag(({ down, delta }) => {
    api.start({ xy: down ? delta : [0, 0] });
  });
  return (
    <animated.div
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
      {...bind()}
      className="box"
    />
  );
};

export default Gesture;
