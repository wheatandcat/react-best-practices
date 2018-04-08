import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "../components/pages/Welcome/Connected.tsx";
import SignIn from "../components/pages/SignIn/Connected";
import SignOut from "../components/pages/SignOut/Connected";
import Auth from "./Auth.ts";
import App from "./App.js";
import Provider from "./Provider";

const auth = new Auth();

export default () => (
  <div>
    <BrowserRouter>
      <Provider auth={auth}>
        <Switch>
          <Route exact path="/singin" component={SignIn} />
          <App auth={auth}>
            <div>
              <Switch>
                <Route path="/signout" component={SignOut} />
                <Route component={Welcome} />
              </Switch>
            </div>
          </App>
        </Switch>
      </Provider>
    </BrowserRouter>
  </div>
);
