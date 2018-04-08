import React from "react";
import styled from "styled-components";
import Search from "components/molecules/Search/Form";
import Table from "components/molecules/Table/Connected.tsx";
import Welcome from "./Welcome";

export default ({ search, onSearch }) => (
  <Root>
    <Welcome>
      <div>
        <br />
        <Search {...search} onSearch={onSearch} />
        <br />
        <Table search={search} />
      </div>
    </Welcome>
  </Root>
);

const Root = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
