import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { animated, useTransition } from "react-spring";

const Routess = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">One</NavLink>
        <NavLink to="/two">Two</NavLink>
        <NavLink to="/three">Three</NavLink>
      </ul>
      <div>
        <Routes>
          <Route exact path="/" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="/three" component={Three} />
        </Routes>
      </div>
    </Router>
  );
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
