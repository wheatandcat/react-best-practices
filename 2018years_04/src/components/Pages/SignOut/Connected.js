import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Consumer } from "containers/Provider";

class Connected extends Component {
  state = {
    signOut: false
  };

  async componentDidMount() {
    try {
      await this.props.auth.signOut();

      this.setState({
        signOut: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.signOut) {
      return null;
    }

    return <Redirect to="/singin" />;
  }
}

const SignOut = props => (
  <Consumer>{({ auth }) => <Connected {...props} auth={auth} />}</Consumer>
);

export default withRouter(SignOut);
