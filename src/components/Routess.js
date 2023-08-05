import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { animated, useTransition } from "react-spring";

function useRouter() {
  return useContext(useLocation());
}

const Routess = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">One</NavLink>
        <NavLink to="/two">Two</NavLink>
        <NavLink to="/three">Three</NavLink>
      </ul>
      <Main />
    </Router>
  );
};

const Main = () => {
  const { location } = useLocation();

  const transitions = useTransition(location, {
    keys: (location) => location.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(({ item, props: style, key }) => (
    <animated.div key={key} style={style}>
      <Routes>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
      </Routes>
    </animated.div>
  ));
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

const One = () => {
  return (
    <div className="page-route">
      <h1>One</h1>
    </div>
  );
};
const Two = () => {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  );
};

export default Routess;
