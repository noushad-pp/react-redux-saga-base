import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { appPages } from "../../data/config/constants";
import { isLoggedIn } from "../../data/redux/userDetails/userDetails.selectors";
import pageActions from "../../data/redux/pageDetails/pageDetails.actions";

class Home extends Component {
  componentWillMount() {
    this.props.actions.triggerSetPage(appPages.home);
  }

  render() {
    return <div>Logged-in View</div>;
  }
}

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
        triggerSetPage: pageActions.pageDetails.triggerSetPage
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Home);
