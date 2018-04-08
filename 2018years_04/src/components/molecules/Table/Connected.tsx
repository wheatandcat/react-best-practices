import * as React from "react";
import { stringify } from "querystring";
import { Consumer } from "../../../containers/Provider";
import { AuthInterface } from "../../../containers/Auth.ts";
import { Search } from "../../pages/Welcome/Connected.tsx";
import Table from "./Table";

interface Item {
  id: number;
  category: string;
  name: string;
  description: string;
}

interface Props {
  auth: AuthInterface;
  search: Search;
}

interface State {
  items: Array<Item>;
  search: Search;
  update: boolean;
}

class Connected extends React.Component<Props, State> {
  state = {
    items: null,
    search: { category: "all" },
    update: false
  };

  async componentDidMount() {
    const items = await this.getItem();

    this.setState({ items });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.update) {
      const items = await this.getItem();

      this.setState({ items, update: false });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.search) !== JSON.stringify(prevState.search)) {
      return {
        search: nextProps.search,
        update: true
      };
    }

    return null;
  }

  getItem = async () => {
    const token = await this.props.auth.getToken();

    interface Params {
      category?: string;
    }

    const params: Params = {};
    if (this.props.search.category !== "all") {
      params.category = this.props.search.category;
    }

    const response = await fetch(
      `http://localhost:8080/items?${stringify(params)}`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      return [];
    }

    const items = await response.json();

    return items;
  };

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
