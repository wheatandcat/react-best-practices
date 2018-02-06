import * as React from "react";
import * as PropTypes from "prop-types";
import * as fetch from "node-fetch";
import Table from "./Table";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface State {
  items: Array<Item>;
}

export default class extends React.Component<void, State> {
  state = { items: null };

  static contextTypes = {
    auth: PropTypes.object
  };

  async componentWillMount() {
    const token = await this.context.auth.getToken();

    const response = await fetch("http://localhost:8080/items", {
      mode: "cors",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      return false;
    }

    const items = await response.json();

    this.setState({
      items
    });
  }

  render() {
    if (this.state.items === null) {
      return null;
    }

    return <Table items={this.state.items} />;
  }
}
