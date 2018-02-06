import React from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";

class SignOut extends React.Component {
  state = {
    signOut: false
  };

  static contextTypes = {
    auth: PropTypes.object
  };

  async componentDidMount() {
    try {
      await this.context.auth.signOut();

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

export default withRouter(SignOut);
