import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        rest.user.login ? (
          <Component {...props} />
        ) : (
          <Redirect to="/"></Redirect>
        )
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
