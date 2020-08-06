import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { publicRoutes, privateRoutes, privateRouteAdmin } from "./routeConfig";
import { PrivateRoutes, PrivateRouteAdmin } from "./PrivateRoutes";
import Error404 from "../containers/Error404/Error404";

Routes.propTypes = {};

function Routes(props) {
  useEffect(() => {
    document.title="DAC tech"
  }, [])
  return (
    <Switch>
     <Redirect exact from="/" to="/management/profile"></Redirect>
      {publicRoutes.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element1, index1) => {
                  return (
                    <PublicRoutes key={index1} {...element1}></PublicRoutes>
                  );
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRoutes.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element1, index1) => {
                  return (
                    <PrivateRoutes key={index1} {...element1}></PrivateRoutes>
                  );
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRouteAdmin.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element1, index1) => {
                  return (
                    <PrivateRouteAdmin key={index1} {...element1}></PrivateRouteAdmin>
                  );
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      <Route path="*" component={Error404}></Route>
    </Switch>
  );
}

export default Routes;
