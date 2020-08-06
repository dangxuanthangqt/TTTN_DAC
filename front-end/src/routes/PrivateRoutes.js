import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { checkRole } from "../Helpers/checkRole";
import { checkTokenExpration } from "../Helpers/checkRoleExpration";
import { clearAllItem } from "../Helpers/localStorageService";

PrivateRoutes.propTypes = {};

export function PrivateRoutes(props) {
  const { component: Mycomponent, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={() => {
        if (checkTokenExpration()) {
          if (
            checkRole() === "dac" ||
            checkRole() === "advertiser" ||
            checkRole() === "admin"
          )
            return <Mycomponent></Mycomponent>;
          else {
            return <Redirect to="/errors/error403"></Redirect>;
          }
        } else {
          localStorage.clear();
          return <Redirect to="/auth/login"></Redirect>;
        }
      }}
    ></Route>
  );
}
export function PrivateRouteAdmin(props) {
  const { component: Mycomponent, ...restProps } = props;
  const Authorization = useSelector((state) => state.Authorization);
  return (
    <Route
      {...restProps}
      render={() => {
        if (checkTokenExpration() && checkRole() === "admin")
          return <Mycomponent></Mycomponent>;
        else {
          return <Redirect to="/errors/error403"></Redirect>;
        }
      }}
    ></Route>
  );
}
