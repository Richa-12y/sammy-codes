import React, { Component } from "react";
import { connect } from "react-redux";
export class ParentSeven extends Component {
  render() {
    console.log("this.props.dataNew", this.props.dataNew);
    const { dataForParentSseven, dataForParentSsevenNew } = this.props.dataNew;

    return (
      <>
        <div>{dataForParentSseven}</div>
        <p>{dataForParentSsevenNew}</p>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    dataNew: state,
  };
};
export default connect(mapStatetoProps)(ParentSeven);
