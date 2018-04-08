import * as React from "react";
import * as PropTypes from "prop-types";
import Page from "./Page";

export interface Search {
  category: string;
}

export interface State {
  search: Search;
}

export default class extends React.Component<void, State> {
  state = { search: { category: "all" } };

  onSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      search: {
        category: e.target.value
      }
    });
  };

  render() {
    return <Page {...this.state} onSearch={this.onSearch} />;
  }
}
