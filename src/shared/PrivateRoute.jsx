import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { isLoggedIn } from "../data/redux/userDetails/selectors";

const chooseComponent = (Component, isAuthenticated) => props => {
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

class PrivateRoute extends React.PureComponent {
  render() {
    const { component, isAuthenticated, ...rest } = this.props;

    return (
      <Route {...rest} render={chooseComponent(component, isAuthenticated)} />
    );
  }
}

export default connect(state => ({
  isAuthenticated: isLoggedIn(state)
}))(PrivateRoute);
