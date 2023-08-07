import React from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "@use-gesture/react";

const Gesture = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0, 0] });
  });
  return (
    <animated.div
      style={{
        transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
      {...bind()}
      className="box"
    />
  );
};

export default Gesture;
