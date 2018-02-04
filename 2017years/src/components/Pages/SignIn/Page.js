// @flow
import React from "react"
import styled from "styled-components"
import MuiPaper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"

type Props = {
  email: string,
  password: string,
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  onSignIn: () => void,
}

const Root = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Paper = styled(MuiPaper)`
  width: 15rem;
  padding: 3rem 1rem;
  text-align: center;
`

export default ({
  email,
  password,
  changeEmail,
  changePassword,
  onSignIn,
}: Props) => (
  <Root>
    <Paper>
      <Typography type="title" gutterBottom>
        Login
      </Typography>
      <div>
        <TextField
          id="name"
          label="email"
          defaultValue={email}
          onChange={e => changeEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
        <TextField
          id="password"
          label="password"
          type="password"
          defaultValue={password}
          onChange={e => changePassword(e.target.value)}
        />
      </div>
      <br />
      <br />
      <div>
        <Button raised color="secondary" onClick={onSignIn}>
          Login
        </Button>
      </div>
    </Paper>
  </Root>
)
