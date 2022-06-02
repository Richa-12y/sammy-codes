import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../src/compontens/home-page";
import AboutPage from "../src/compontens/about-page";
import ProfilePage from "../src/compontens/profile-page";
import ContactPage from "../src/compontens/contactus-page";
import ParentOne from "../src/compontens/Redux/parent-one/parent-one";
import ParentTwo from "../src/compontens/Redux/parent-two/parent-two";
import ParentThree from "./compontens/Redux/parentthree/ParentThree";
import ParentFour from "./compontens/Redux/parentfour/ParentFour";
import Demo from "./compontens/Redux/today/Demo";
import Demoone from "./compontens/Redux/todaydemo/Demoone";
import ParentFive from "./compontens/Redux/parentfour/ParentFive";
import ParentSix from "./compontens/Redux/parentsix/ParentSix";
import ParentSeven from "./compontens/Redux/parentsenven/ParentSeven";

export default class RouteClass extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/parentOne" element={<ParentOne />} />
        <Route path="/parentTwo" element={<ParentTwo />} />
        <Route path="/parentThree" element={<ParentThree />} />
        <Route path="/parentFoure" element={<ParentFour />} />
        <Route path="/parentFive" element={<ParentFive />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demoone" element={<Demoone />} />
        <Route path="/parentSix" element={<ParentSix />} />
        <Route path="/parentSeven" element={<ParentSeven />} />
      </Routes>
    );
  }
}
