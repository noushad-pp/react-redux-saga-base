import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as userActions from "../../data/redux/userDetails/actions";

function mapStateToProps(state) {
  return {
    page_details: state.page_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions), dispatch)
  };
}

class Login extends Component {
  componentWillMount() {
    // this.props.actions.pageChanged(CONSTANTS.appPages.home);
  }

  render() {
    return <div>Login</div>;
  }
}

Login.propTypes = {
  actions: PropTypes.object,
  history: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Login);
