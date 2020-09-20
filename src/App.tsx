import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import { List } from "./components/List";
import { ListContextProvider } from "./contexts/List";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <ListContextProvider>
            <Menu />
            <List />
            <Footer />
          </ListContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
