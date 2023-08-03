import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Component2 = () => {
  const [isToggle, setIsToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggle ? 1 : 0,
    // fontSize: isToggle ? "20px" : "40px",
    // color: isToggle ? "green" : "yellow",
  });
  return (
    <div className="c2Style">
      <animated.div style={fade}>
        <h1>Component 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
          magnam nostrum a soluta reiciendis consequuntur corrupti modi quod
          placeat qui ut, quia doloremque obcaecati! Illum molestiae cum ex
          rerum?
        </p>
      </animated.div>
      <button className="btn" onClick={() => setIsToggle(!isToggle)}>
        Toggle Component 2
      </button>
    </div>
  );
};

export default Component2;

{
  /* <Spring */
}
//   from={{ x: 0, opacity: 0 }}
//   to={{ x: 100, opacity: 1 }}
//   config={{ delay: 1000, duration: 1000 }}
// >
//   {(props) => (
//     <div style={props}>
//       <div style={c2Style}>
//         <h1>Component 2</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
//           ratione magnam nostrum a soluta reiciendis consequuntur corrupti
//           modi quod placeat qui ut, quia doloremque obcaecati! Illum
//           molestiae cum ex rerum?
//         </p>
//         <button style={btn} onClick={this.props.toggle}>
//           Toggle Component 3
//         </button>
//       </div>
//     </div>
//   )}
// </Spring>
