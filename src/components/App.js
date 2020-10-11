import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgesOriginal from "../pages/BadgesOriginal";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import NotFound from "../pages/NotFound";
import Layout from "./Layout";
import BadgeHome from "../pages/BadgeHome";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={BadgeHome}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route exact path="/badgesOriginal" component={BadgesOriginal}></Route>
          <Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>

          <Route exact path="/notfound" component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
