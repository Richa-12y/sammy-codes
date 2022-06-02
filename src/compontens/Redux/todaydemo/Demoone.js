import React, { Component } from "react";
import { connect } from "react-redux";
import { domoData } from "../reducer";

export class Demoone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoHeading: "this is redux demo",
    };
  }
  handleCilckPa = () => {
    this.props.dispatch(domoData(this.state.demoHeading));
  };
  render() {
    return (
      <>
        <div>Demoone</div>
        <button onClick={() => this.handleCilckPa()}>
          Cilck here for data
        </button>
      </>
    );
  }
}
export default connect()(Demoone);
