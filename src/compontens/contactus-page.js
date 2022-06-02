import React, { Component } from "react";
import { connect } from "react-redux";

export class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("this.props.data", this.props.data);
    const { newDataVal, dataVal } = this.props.data;
    return (
      <>
        <div>Contact us</div>
        <p>{newDataVal}</p>
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

export default connect(mapStatetoProps)(ContactPage);
