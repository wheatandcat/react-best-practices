import React from "react";
import styled from "styled-components";
import Table from "./Table/Connected";
import Welcome from "./Welcome";

const Root = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Root>
    <Welcome>
      <Table />
    </Welcome>
  </Root>
);
