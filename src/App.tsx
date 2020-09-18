import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Shuffle } from "./Shuffle";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <h1>QShuf</h1>
      <Switch>
        <Route>
          <Shuffle />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
