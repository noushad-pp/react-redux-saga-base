import { bindActionCreators } from "redux";
import classNames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";

import RouteContainer from "./RouteContainer";

import * as UTILS from "../data/utils/deviceData";
import pageActions from "../data/redux/pageDetails/pageDetails.actions";

class AppContainer extends Component {
  componentWillMount() {
    const {
      actions: { pageActions }
    } = this.props;

    const { setSystemLanguage, setDeviceData } = pageActions;
    const deviceData = UTILS.checkDevice.deviceStatus();
    const systLang = UTILS.getLang();

    setDeviceData(deviceData);
    if (systLang) {
      setSystemLanguage(systLang);
    }
    this.timeout = false;
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const deviceData = UTILS.checkDevice.deviceStatus();
        this.props.actions.pageActions.setDeviceData(deviceData);
      }, 300);
    });
  }

  render() {
    const {
      pageDetails: { deviceData }
    } = this.props;
    const isMobile =
      deviceData && (deviceData.mobile || deviceData.screen_width < 768);

    return (
      <div
        className={classNames(
          "flex-column full-width full-min-height AppContainer",
          { mobile: isMobile }
        )}
      >
        <RouteContainer />
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
  console.log(pageActions);

  return {
    actions: {
      pageActions: bindActionCreators(pageActions.pageDetails, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
