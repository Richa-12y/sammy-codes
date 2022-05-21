import React, { Component } from "react";
import largeProfile from "../../lib/large-profile.jpg";

export default class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);

    return (
      <div className="Middle_Container">
        <img
          className="Middle_Container_Image"
          src={largeProfile}
          alt="A pretend invisible person"
        ></img>
        <div className="Middle_Container_Text">
          <h1>{this.props.smallHeadingContainer}</h1>
          <p>{this.props.contentPragContainer}</p>
          <p>
            Email me at
            <a href="mailto:Sammy@SampleEmail.com">Sammy@SampleEmail.com </a>
          </p>
        </div>
      </div>
    );
  }
}
