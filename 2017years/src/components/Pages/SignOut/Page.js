// @flow
import React, { Component } from "react"
import { Redirect, withRouter } from "react-router-dom"

type Props = {
  onSignOut: () => void,
}

class SignOut extends Component<Props> {
  componentDidMount() {
    this.props.onSignOut()
  }

  render() {
    return <Redirect to="/" />
  }
}

export default withRouter(SignOut)
