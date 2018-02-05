import React, { Component } from "react"
import PropTypes from "prop-types"
import { Redirect, withRouter } from "react-router-dom"
import Page from "./Page"

class Connected extends Component {
  state = {
    signedIn: false,
    input: {
      email: "",
      password: "",
    },
  }

  static contextTypes = {
    auth: PropTypes.object,
  }

  async componentDidMount() {
    if (!await this.context.auth.signedIn()) {
      return
    }

    await this.setState({
      signedIn: true,
    })
  }

  onChange = event => {
    this.setState({
      input: {
        ...this.state.input,
        [event.currentTarget.name]: event.currentTarget.value,
      },
    })
  }

  onSignIn = async () => {
    const { email, password } = await this.state.input

    try {
      await this.context.auth.signIn(email, password)
      await this.setState({
        signedIn: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  onSiginOut = async () => {
    await this.context.auth.signOut()
    await this.setState({
      signedIn: false,
    })
  }

  render() {
    if (this.state.signedIn) {
      return <Redirect to="/" />
    }

    return (
      <Page
        onChange={this.onChange}
        onSignIn={this.onSignIn}
        onSiginOut={this.onSiginOut}
      />
    )
  }
}

export default withRouter(Connected)
