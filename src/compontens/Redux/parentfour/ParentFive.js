import React, { Component } from "react";
import { connect } from "react-redux"; //second step

export class ParentFive extends Component {
  render() {
    const { newDataForParentThree } = this.props.parentFive; //desture step-14
    console.log(newDataForParentThree);
    console.log(this.props.parentFive);
    return <div>{newDataForParentThree}</div>; //step-13
  }
}
//step-12 mapStateToProps(it is used for reciving the data)
const mapStateToProps = (state) => {
  //pass the state as a arugment
  return {
    parentFive: state,
  };
};
export default connect(mapStateToProps)(ParentFive); //second step
