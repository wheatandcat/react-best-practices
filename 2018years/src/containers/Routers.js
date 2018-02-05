import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Welcome from "../components/Pages/Welcome/Page"
import SignIn from "../components/Pages/SignIn/Connected"
import AuthProvider, { Auth } from "./Auth"
import App from "./App"

const auth = new Auth()

export default () => (
  <div>
    <BrowserRouter>
      <AuthProvider auth={auth}>
        <Switch>
          <Route exact path="/singin" component={SignIn} />
          <App>
            <div>
              <Switch>
                <Route component={Welcome} />
              </Switch>
            </div>
          </App>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  </div>
)
