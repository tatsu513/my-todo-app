import React from "react";
import { Route, Switch } from "react-router";
import { Home, Login } from "./templates";
// import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={Login} />
      <Route exact path="(/)?" component={Home} />
    </Switch>
  );
};

export default Router;
