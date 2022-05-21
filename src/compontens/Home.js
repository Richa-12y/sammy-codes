import React, { Component } from "react";
import "../compontens/about/about.css";
import Container from "./about/Container";
import Header from "./about/Header";

// import Child from "./childcompontes/Child";

//create one co pontes about.js
//heading,parg

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "Richa",
      title: "Sammy the Shark",
      subTitle: "Senior Selachimorpha at DigitalOcean",
      aboutSite: "About this site",
      smallHeading: "Hello",
      contentPrag:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis disparturient montes nascetur ridiculus mus. Purus semper eget duis attellus at urna condimentum mattis. Turpis in eu mi bibendum neque egestas. Rhoncus do lor purus non enim praesent elementum facilisis.Ipsum nunc aliquet bibendum enim facilisis gravida. Cursus turpis satincidunt dui ut ornare lectus. Enim nec dui nunc mattis enim ut. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.Tussa ultricies mi quis hendrerit dolor magna. Elit eget gravida cum sociis natoque penatibus et magnis dis. Enim tortor at auctor urna nunc id cursus metus.",
    };
  }
  render() {
    return (
      <div className="Container">
        <Header
          titleHeader={this.state.title}
          subTitleHeader={this.state.subTitle}
          aboutSiteHeader={this.state.aboutSite}
        />
        <Container
          smallHeadingContainer={this.state.smallHeading}
          contentPragContainer={this.state.contentPrag}
        />

        <div className="Footer_Container">
          <h1>Made with 🤍 at DigitalOcean</h1>
        </div>
      </div>
    );
  }
}

/* <Child label={this.state.name} /> */
