import React, { Component } from "react";
import { connect } from "react-redux";

export class ParentTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("this.props.data", this.props.data);
    const { content, dataVal } = this.props.data;
    return (
      <>
        <div>parent-two</div>
        <p>{content}</p>
        <span>{dataVal}</span>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStatetoProps)(ParentTwo);
