import React, { Component } from "react";
import { connect } from "react-redux"; //second step

export class ParentFour extends Component {
  render() {
    const { newDataForParentThree } = this.props.parentFour; //desture step-14
    console.log(newDataForParentThree);
    console.log(this.props.parentFour);
    return <div>{newDataForParentThree}</div>; //step-13
  }
}
//step-12 mapStateToProps(it is used for reciving the data)
const mapStateToProps = (state) => {
  //pass the state as a arugment
  return {
    parentFour: state,
  };
};
export default connect(mapStateToProps)(ParentFour); //second step
