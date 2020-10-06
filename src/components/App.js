import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/badges" component={Badges}></Route>
        <Route path="/badges/new" component={BadgeNew}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
