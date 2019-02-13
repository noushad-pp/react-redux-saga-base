import PropTypes from "prop-types";
import React, { Component } from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import NotFound from "../shared/NotFound";
import PrivateRoute from "../shared/PrivateRoute";

class RouteContainer extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <PrivateRoute exact={true} path="/" component={Home} />
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
