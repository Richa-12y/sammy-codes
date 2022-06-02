import React, { Component } from "react"; //first step
import { connect } from "react-redux"; //second step
import { parentThreeData } from "../reducer"; //step-11 import here from reducer file
export class ParentThree extends Component {
  //six steps
  constructor(props) {
    super(props);
    this.state = {
      heading:
        "The Redux store is created using the configureStore function from Redux Toolkit. configureStore requires that we pass in a reducer argument.",
    };
  }
  //fourth step
  handleCilckPa = () => {
    this.props.dispatch(parentThreeData(this.state.heading)); //step-11(dispatch is used for sending msg one file to another)
  };
  render() {
    return (
      <>
        <div>ParentThree</div>
        {/* thrird step */}
        <button onClick={() => this.handleCilckPa()}>
          Cilck here for data
        </button>
      </>
    );
  }
}
export default connect()(ParentThree); //second step
