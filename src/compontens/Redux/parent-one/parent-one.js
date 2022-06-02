import React, { Component } from "react";
import Child from "../../childcompontes/Child";
import { connect } from "react-redux";
import { initData, clickData } from "../reducer";
export class ParentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum",
      clickedData: "clicked",
    };
  }
  componentDidMount() {
    //Mouting lifecycle
    this.props.dispatch(initData(this.state.data));
  }

  handlePush = () => {
    this.props.dispatch(clickData(this.state.clickedData));
  };
  render() {
    return (
      <>
        <div>ParentOne</div>
        <Child label={"test"} />
        <button onClick={() => this.handlePush()}>Pass</button>
      </>
    );
  }
}

export default connect()(ParentOne);
