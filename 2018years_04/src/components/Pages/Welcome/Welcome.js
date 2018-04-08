import React from "react";
import styled from "styled-components";
import MuiPaper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

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

const Paper = styled(MuiPaper)`
  padding: 1rem 5rem;
  text-align: center;
`;
