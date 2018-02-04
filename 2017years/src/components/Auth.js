// @flow
import React, { Component, type Node } from "react"
import { Route } from "react-router-dom"
import { CircularProgress } from "material-ui/Progress"
import styled from "styled-components"
import SignIn from "../redux/containers/SignIn"

type Props = {
  children: Node,
  signedIn: boolean,
  onAuth: () => void,
}

type State = {
  loading: boolean,
}

const Root = styled.div`
  padding: 2rem;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class extends Component<Props, State> {
  state = { loading: true }

  async componentDidMount() {
    await this.props.onAuth()

    const loading = () => {
      this.setState({ loading: false })
    }
    setTimeout(loading.bind(this), 1500)
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <CircularProgress size={100} />
        </Root>
      )
    }

    if (this.props.signedIn) {
      return <Route children={this.props.children} />
    }

    return <Route component={SignIn} />
  }
}
