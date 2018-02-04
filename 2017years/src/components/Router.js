// @flow
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Auth from "../redux/containers/Auth"
import Welcome from "../components/Pages/Welcome/Page"
import SignOut from "../redux/containers/SignOut"

export default () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Auth>
          <Switch>
            <Route path="/signout" component={SignOut} />
            <Route component={Welcome} />
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>
  </div>
)
