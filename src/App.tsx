import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import { List } from "./pages/List";
import { ListContextProvider } from "./contexts/List";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import { About } from "./pages/About";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ListContextProvider>
        <Menu />
        <Content>
          <Switch>
            <Route exact component={About} path="/about" />
            <Route component={List} />
          </Switch>
        </Content>
        <Footer />
      </ListContextProvider>
    </BrowserRouter>
  );
};
