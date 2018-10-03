import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./view";
import { callAPI } from "../actions/demo";

class MyScreen extends Component {
  render() {
    return <View {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    success: state.MyReducer.success,
    loading: state.MyReducer.loading,
    error: state.MyReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCallAPI: () => {
      dispatch(callAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyScreen);
