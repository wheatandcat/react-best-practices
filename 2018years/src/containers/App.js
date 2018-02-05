import React, { Component } from "react"
import PropTypes from "prop-types"
import { Route, Redirect, withRouter } from "react-router-dom"

class App extends Component {
  static contextTypes = {
    auth: PropTypes.object,
  }

  render() {
    return this.context.auth.signedIn() ? (
      <Route children={this.props.children} />
    ) : (
      <Redirect to="/singin" />
    )
  }
}

export default withRouter(App)
