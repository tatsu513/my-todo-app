import React from "react";
import { Route, Switch } from "react-router";
import { Home, Account } from "./templates";
import Auth from "./Auth";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={Account} />
      <Route exact path={"/signin"} component={Account} />
      <Route exact path={"/reset"} component={Account} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;
