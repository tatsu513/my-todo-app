import React from "react";
import { Route, Switch } from "react-router";
import { Home, Account } from "./templates";
// import Auth from "./Auth";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={Home} />
      <Route exact path={"/signup"} component={Account} />
      <Route exact path={"/signin"} component={Account} />
    </Switch>
  );
};

export default Router;
