import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import { List } from "./components/List";
import { ListContextProvider } from "./contexts/List";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <ListContextProvider>
            <Menu />
            <List />
          </ListContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
