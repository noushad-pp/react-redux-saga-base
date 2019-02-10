import PropTypes from "prop-types";
import React, { Component } from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import Login from "./Login";
import NotFound from "../shared/NotFound";
import PrivateRoute from "../shared/PrivateRoute";

class RouteContainer extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <PrivateRoute exact={true} path="/" component={NotFound} />
          <Route exact={true} path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

RouteContainer.propTypes = {
  history: PropTypes.object
};

export default withRouter(RouteContainer);
