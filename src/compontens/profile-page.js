import React, { Component } from "react";
import { profileInitialData, clickData } from "./Redux/reducer";
import { connect } from "react-redux";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "contact page header",
      clickedData: "clicked",
    };
  }
  componentDidMount() {
    //Mouting lifecycle
    this.props.dispatch(profileInitialData(this.state.data));
  }

  handleProfile = () => {
    this.props.dispatch(clickData(this.state.clickedData));
  };

  render() {
    const { dataVal } = this.props.data;
    return (
      <>
        <div>Profile</div>
        <p>{dataVal}</p>
        <button onClick={() => this.handleProfile()}>Pass data</button>
      </>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    data: state,
  };
};
export default connect(mapStatetoProps)(ProfilePage);
