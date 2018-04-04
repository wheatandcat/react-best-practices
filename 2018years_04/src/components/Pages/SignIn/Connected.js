import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Consumer } from "containers/Provider";
import Page from "./Page";

class Connected extends Component {
  state = {
    signedIn: false,
    input: {
      email: "",
      password: ""
    }
  };

  async componentDidMount() {
    if (!await this.props.auth.signedIn()) {
      return;
    }

    await this.setState({
      signedIn: true
    });
  }

  onChange = event => {
    this.setState({
      input: {
        ...this.state.input,
        [event.currentTarget.name]: event.currentTarget.value
      }
    });
  };

  onSignIn = async () => {
    const { email, password } = await this.state.input;

    try {
      console.log(this.props.auth);
      await this.props.auth.signIn(email, password);
      await this.setState({
        signedIn: true
      });
    } catch (error) {
      console.log(error);
    }
  };

  onSiginOut = async () => {
    await this.props.auth.signOut();
    await this.setState({
      signedIn: false
    });
  };

  render() {
    if (this.state.signedIn) {
      return <Redirect to="/" />;
    }

    return (
      <Page
        onChange={this.onChange}
        onSignIn={this.onSignIn}
        onSiginOut={this.onSiginOut}
      />
    );
  }
}

const SignIn = props => (
  <Consumer>{({ auth }) => <Connected {...props} auth={auth} />}</Consumer>
);

export default withRouter(SignIn);
