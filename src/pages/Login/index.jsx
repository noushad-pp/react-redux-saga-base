import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { appPages } from "../../data/config/constants";
import { isLoggedIn } from "../../data/redux/userDetails/userDetails.selectors";
import { withRouter } from "react-router-dom";
import userActions from "../../data/redux/userDetails/userDetails.actions";
import pageActions from "../../data/redux/pageDetails/pageDetails.actions";

class Login extends Component {
  componentWillMount() {
    this.props.actions.triggerSetPage(appPages.login);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isAuthenticated !== nextProps.isAuthenticated &&
      nextProps.isAuthenticated
    ) {
      this.props.history.push("/");
    }
  }

  onLogin = () => {
    this.props.actions.triggerUserLogin();
  };

  render() {
    return (
      <div>
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = state => {
  return {
    page_details: state.page_details,
    isAuthenticated: isLoggedIn(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        triggerSetPage: pageActions.pageDetails.triggerSetPage,
        triggerUserLogin: userActions.userDetails.triggerLogin
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(withRouter(Login));
