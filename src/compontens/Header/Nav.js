import React, { Component } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/parentOne">Parent One</NavLink>
            </li>
            <li>
              <NavLink to="/parentTwo">Parent Two</NavLink>
            </li>
            <li>
              <NavLink to="/parentThree">parentThree</NavLink>
            </li>
            <li>
              <NavLink to="/parentFoure">parentFoure</NavLink>
            </li>
            <li>
              <NavLink to="/parentFive">parentFive</NavLink>
            </li>
            <li>
              <NavLink to="/demoone">Demoone</NavLink>
            </li>
            <li>
              <NavLink to="/demo">Demo</NavLink>
            </li>
            <li>
              <NavLink to="/parentSix">parentSix</NavLink>
            </li>
            <li>
              <NavLink to="/parentSeven">parentSeven</NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
