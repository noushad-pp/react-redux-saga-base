import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";

import RouteContainer from "./RouteContainer";

import * as UTILS from "../data/utils/deviceData";
import pageActions from "../data/redux/pageDetails/actions";

class AppContainer extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { systLangSet, deviceDataLoaded } = pageActions;
    const deviceData = UTILS.checkDevice.deviceStatus();
    const systLang = UTILS.getLang();

    // dispatch(deviceDataLoaded(deviceData));
    // if (systLang) {
    //   dispatch(systLangSet(systLang));
    // }
    this.timeout = false;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { deviceDataLoaded } = pageActions;
    // window.addEventListener("resize", () => {
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(() => {
    //     dispatch(deviceDataLoaded(UTILS.checkDevice.deviceStatus()));
    //   }, 300);
    // });
  }

  render() {
    const { pageDetails } = this.props;
    const isMobile = true;

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

function mapStateToProps(state) {
  return {
    pageDetails: state.pageDetails
  };
}

export default connect(mapStateToProps)(AppContainer);
