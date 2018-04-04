import * as React from "react";
import * as PropTypes from "prop-types";
import * as fetch from "node-fetch";
import { Consumer } from "../../../../containers/Provider";
import Table from "./Table";

export interface AuthInterface {
  getToken: () => string;
  signedIn: () => boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface Item {
  id: number;
  name: string;
  description: string;
}

interface Props {
  auth: AuthInterface;
}

interface State {
  items: Array<Item>;
}

class Connected extends React.Component<Props, State> {
  state = { items: null };

  static contextTy;

  pes = {
    auth: PropTypes.object
  };

  async componentDidMount() {
    const token = await this.props.auth.getToken();

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

export default props => (
  <Consumer>{({ auth }) => <Connected {...props} auth={auth} />}</Consumer>
);
