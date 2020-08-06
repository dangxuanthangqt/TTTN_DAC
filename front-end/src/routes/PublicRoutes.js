import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

PublicRoutes.propTypes = {};

function PublicRoutes(props) {
  const { component: MyComponent, ...restProps } = props;
  
  return (
    <Route {...restProps} render={() => <MyComponent></MyComponent>}></Route>
  );
}

export default PublicRoutes;
