// @flow
import React from "react"
import styled from "styled-components"
import MuiPaper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import { Link } from "react-router-dom"

const Root = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Paper = styled(MuiPaper)`
  width: 90%;
  height: 90%;
  padding: 10rem;
  text-align: center;
`

export default () => (
  <Root>
    <Paper>
      <Typography type="title" gutterBottom>
        Welcome to page !
      </Typography>

      <br />
      <Link to="/signout">
        <Button raised color="secondary">
          SignOut
        </Button>
      </Link>
    </Paper>
  </Root>
)
