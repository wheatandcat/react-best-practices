import React from "react"
import styled from "styled-components"
import MuiPaper from "material-ui/Paper"
import Typography from "material-ui/Typography"

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
      <Typography variant="title" gutterBottom>
        Welcome to page !
      </Typography>

      <br />

      <Typography variant="caption" gutterBottom>
        Access http://localhost:8080/items response !!
      </Typography>
    </Paper>
  </Root>
)
