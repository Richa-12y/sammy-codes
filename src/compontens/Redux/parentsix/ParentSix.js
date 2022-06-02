import React, { Component } from "react";
import { connect } from "react-redux";
import { parentSixData, parentSixDataNew } from "../reducer";
export class ParentSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentSixTitle:
        "The sample project we'll look at is a small counter application that lets us add or subtract from a number as we click buttons. It may not be very exciting, but it shows all the important pieces of a React+Redux application in action.",
      parentSixHeading: "hai how you doing ?",
    };
  }

  componentDidMount() {
    this.props.dispatch(parentSixDataNew(this.state.parentSixHeading));
  }
  handleDataPush = () => {
    this.props.dispatch(parentSixData(this.state.parentSixTitle));
  };
  render() {
    return (
      <>
        <div>ParentSix</div>
        <button onClick={() => this.handleDataPush()}>Click Me</button>
      </>
    );
  }
}
export default connect()(ParentSix);
