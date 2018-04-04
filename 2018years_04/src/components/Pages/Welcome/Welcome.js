import React from "react";
import styled from "styled-components";
import MuiPaper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import Table from "./Table/Connected.tsx";

const Paper = styled(MuiPaper)`
  width: 30rem;
  height: 40rem;
  padding: 10rem;
  text-align: center;
`;

export default ({ children }) => (
  <Paper>
    <Typography variant="title" gutterBottom>
      Welcome to react-best-practices 2018years (April) !
    </Typography>
    <Typography variant="caption" gutterBottom>
      update React 16.3, wbpack4, storybook4!
    </Typography>
    <br />
    <Typography variant="caption" gutterBottom>
      Access http://localhost:8080/items response !!
    </Typography>
    {children}
    <br />
    <br />
    <br />
    <Link to="/signout">
      <Button variant="raised" color="secondary">
        SignOut
      </Button>
    </Link>
    <br />
  </Paper>
);
