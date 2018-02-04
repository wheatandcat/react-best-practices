// @flow
import React from "react"
import Router from "./components/Router"
import { Provider } from "react-redux"
import createHistory from "history/createBrowserHistory"
import configureStore from "./redux/configureStore"

const history = createHistory()
const store = configureStore(history)

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
