import React, { Component } from "react";
import data from "./data.json";
import { connect } from "react-redux";
import { clickData } from "./Redux/reducer";
export class AboutPage extends Component {
  //Mounting
  constructor(props) {
    //Mounting
    super(props);
    this.state = {
      title: "Life Cycle",
      name: "Cycle",
      clickedData: "new Data passed",
    };
  }

  componentDidMount() {
    //Mounting
    this.setState({ title: "First" });
    // this.props.dispatch(initData(this.state.data));
  }

  //Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    nextState.title = "second";
    nextState.name = "second name";
    return true;
  }
  componentDidUpdate(prevState, prevProps) {
    console.log("prevState, prevProps", prevState, prevProps);
    // prevState.title = "four";
    return false;
  }
  //UnMounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  //Errorhandling
  componentDidCatch(error, info) {
    console.log("error", error, "info", info);
  }
  handleClick = () => {
    this.props.dispatch(clickData(this.state.clickedData));
  };
  render() {
    //Mounting
    const { title, name } = this.state;
    const { dataVal } = this.props.data;
    console.log("render", title);
    console.log("data", data);
    return (
      <>
        <h1>About</h1>
        <p>{title}</p>
        <p>{name}</p>
        <h2>{data.about.title}</h2>
        <p>{data.about.para}</p>
        <p>{dataVal}</p>
        <button onClick={() => this.handleClick()}>Click me</button>
      </>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStatetoProps)(AboutPage);
