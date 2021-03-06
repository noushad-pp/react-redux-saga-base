import { bindActionCreators } from "redux";
import classNames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import pageActions from "../data/redux/pageDetails/pageDetails.actions";
import React, { Component } from "react";

import "./AppContainer.scss";
import RouteContainer from "./RouteContainer";
import Sidebar from "../shared/Sidebar";

class AppContainer extends Component {
  componentWillMount() {
    this.props.actions.triggerSetDeviceData();
    this.timeout = false;
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.props.actions.triggerSetDeviceData();
      }, 300);
    });
  }

  render() {
    const {
      pageDetails: { deviceData }
    } = this.props;
    const isMobile =
      deviceData && (deviceData.mobile || deviceData.screen_width < 768);
    const showSidebar = true;

    return (
      <div
        className={classNames(
          "flex-column full-width full-min-height AppContainer",
          { mobile: isMobile }
        )}
      >
        <div className="appContainer">
          {showSidebar &&
            <div className="appSidebar">
              <Sidebar />
            </div>
          }
          <div className="appContent">
            <RouteContainer />
          </div>
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  pageDetails: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = state => {
  return {
    pageDetails: state.pageDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        triggerSetDeviceData: pageActions.pageDetails.triggerSetDeviceData
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
