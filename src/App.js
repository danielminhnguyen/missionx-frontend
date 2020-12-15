import DashBoard from "layouts/Dashboard";
import Main from "layouts/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Switch>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/projects/:projectid" component={DashBoard} />
        {/* <Route path="/buildproject" component={DashBoard} /> */}
        {/* <Route > path="/projects"/> */}

        {/* <Route path="/projects" component={Main} /> */}
        <Route path="/" component={Main} />
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}
