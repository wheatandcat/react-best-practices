import React from "react";
import styled from "styled-components";
import MuiPaper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import Table from "./Table/Connected";

const Paper = styled(MuiPaper)`
  width: 30rem;
  height: 20rem;
  padding: 10rem;
  text-align: center;
`;

export default ({ children }) => (
  <Paper>
    <Typography variant="title" gutterBottom>
      Welcome to react-best-practics 2018years !
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
