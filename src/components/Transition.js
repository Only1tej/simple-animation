import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Transition = () => {
  const [items, setItems] = useState([
    {
      letter: "S",
      key: 1,
    },
    {
      letter: "c",
      key: 2,
    },
    {
      letter: "o",
      key: 3,
    },
    {
      letter: "t",
      key: 4,
    },
    {
      letter: "t",
      key: 5,
    },
  ]);
  const transition = useTransition(items, {
    keys: (item) => item.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <div>
        {transition((styles, item, key) => (
          <animated.h1 style={styles} key={key}>
            {item.letter}
          </animated.h1>
        ))}
        <button
          onClick={() =>
            setItems([
              {
                letter: "S",
                key: 1,
              },
            ])
          }
        >
          Toggle
        </button>
      </div>
    </>
  );
};

// const AnimatedTitle = animated(componentName);

export default Transition;

// const transition = useTransition(isToggled, {
//   from: { opacity: 0, position: "absolute" },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
// });

// return (
//   <>
//     <div
//       style={{
//         position: "relative",
//       }}
//     >
//       {transition((styles, item) =>
//         item ? (
//           <animated.h1 style={styles}>Hello</animated.h1>
//         ) : (
//           <animated.h1 style={styles}>World</animated.h1>
//         )
//       )}
//       <button onClick={() => setToggle(!isToggled)}>Toggle</button>
//     </div>
//   </>
// );
