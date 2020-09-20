import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./Menu";
import { Shuffle } from "./Shuffle";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Menu />
          <Shuffle />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
