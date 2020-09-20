import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { ListContextProvider } from "./contexts/List";
import { PageContextProvider } from "./contexts/Page";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ListContextProvider>
        <PageContextProvider>
          <Menu />
          <Switch>
            <Route>
              {/* See Content - This is a routing hack :( */}
              <Content />
            </Route>
          </Switch>
          <Footer />
        </PageContextProvider>
      </ListContextProvider>
    </BrowserRouter>
  );
};
