import React from "react";
import { useSpring, animated } from "react-spring";

const Component1 = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });

  return (
    <animated.div className="c1Style" style={fade}>
      <h1>Component 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
        magnam nostrum a soluta reiciendis consequuntur corrupti modi quod
        placeat qui ut, quia doloremque obcaecati! Illum molestiae cum ex rerum?
      </p>
      <button className="btn">Menu</button>
    </animated.div>
  );
};

export default Component1;

// <Spring
//   from={{ x: 0, opacity: 0, marginTop: -500 }}
//   to={{ x: 100, opacity: 1, marginTop: 0 }}
// >
//   {(props) => (
//     <div style={props}>
//       <div style={c1Style}>
//         <h1>Component 1</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
//           ratione magnam nostrum a soluta reiciendis consequuntur corrupti
//           modi quod placeat qui ut, quia doloremque obcaecati! Illum
//           molestiae cum ex rerum?
//         </p>
//         {/* <Spring
//           from={{ number: 0 }}
//           to={{ number: 10 }}
//           config={{ duration: 10000 }}
//         >
//           {(props) => (
//             <div style={props}>
//               <h1 style={counter}>{props.number}</h1>
//             </div>
//           )}
//         </Spring> */}
//       </div>
//     </div>
//   )}
// </Spring>
