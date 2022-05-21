import React, { Component } from "react";
import SmallProfile from "../../lib/profile.jpg";
import "./header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);

    return (
      <div className="Container_Header">
        <img
          className="Container_small_profile"
          src={SmallProfile}
          alt="shark."
        ></img>
        <h1 className="Title_heading">{this.props.titleHeader}</h1>
        <p className="subTitle">
          <em>{this.props.subTitleHeader}</em>
        </p>
        <p className="aboutSite">
          <a href="about.html">{this.props.aboutSiteHeader}</a>
        </p>
      </div>
    );
  }
}
