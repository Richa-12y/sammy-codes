import React, { Component } from "react";
import { connect } from "react-redux";

export class Demo extends Component {
  render() {
    const { dataForDomo } = this.props.demoFour;
    console.log(dataForDomo);
    console.log(this.props.demoFour);
    return (
      <>
        <div>Demo</div>
        <p>{dataForDomo}</p>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    demoFour: state,
  };
};
export default connect(mapStateToProps)(Demo);
