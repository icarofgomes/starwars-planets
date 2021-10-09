import React from "react";
import { Switch, Route } from "react-router";
import { Intro, Main } from "../pages";

function Router() {
  return (
    <Switch>
      <Route exact path="/starwars-planets" component={ Intro }/>
      <Route path="/starwars-planets/main" component={ Main } />
    </Switch>
  )
}

export default Router;
