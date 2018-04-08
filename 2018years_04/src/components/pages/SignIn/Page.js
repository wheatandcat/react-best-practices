import React from "react";
import styled from "styled-components";
import MuiPaper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

export default ({ onChange, onSignIn }) => (
  <Root>
    <Paper>
      <Typography variant="title" gutterBottom>
        Login
      </Typography>
      <div>
        <TextField id="email" name="email" label="email" onChange={onChange} />
      </div>
      <br />
      <div>
        <TextField
          id="password"
          name="password"
          label="password"
          type="password"
          onChange={onChange}
        />
      </div>
      <br />
      <br />
      <div>
        <Button variant="raised" color="secondary" onClick={onSignIn}>
          Login
        </Button>
      </div>
    </Paper>
  </Root>
);

const Root = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paper = styled(MuiPaper)`
  width: 15rem;
  padding: 3rem 1rem;
  text-align: center;
`;
