import { Component, Fragment } from "react";
import PropTypes from "prop-types";
import fetch from "node-fetch";

export class Auth {
  getToken = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No id token found");
    }

    return token;
  };

  signedIn = () => {
    return !!localStorage.getItem("token");
  };

  signIn = async (email, password) => {
    const response = await fetch("http://localhost:8080/sigin", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (!response.ok) {
      return;
    }

    const { token } = await response.json();

    localStorage.setItem("token", token);
  };

  signOut = async () => {
    await localStorage.removeItem("token");
  };
}

export default class extends Component {
  static propTypes = {
    children: PropTypes.element,
    auth: PropTypes.object
  };

  static childContextTypes = {
    auth: PropTypes.object
  };

  getChildContext() {
    return {
      auth: this.props.auth
    };
  }

  render() {
    return this.props.children;
  }
}
