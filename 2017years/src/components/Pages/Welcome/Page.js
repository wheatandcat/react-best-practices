// @flow
import React from "react"
import { compose, lifecycle, type HOC } from "recompose"
import styled from "styled-components"
import MuiPaper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table"
import { Link } from "react-router-dom"

type Item = {
  id: number,
  name: string,
  description: string,
}

type State = {}

type Props = {
  items: Array<Item>,
  onGet: () => void,
}

const enhance: HOC<State, Props> = compose(
  lifecycle({
    componentWillMount() {
      this.props.onGet()
    },
  })
)

const Root = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Paper = styled(MuiPaper)`
  width: 30rem;
  height: 20rem;
  padding: 10rem;
  text-align: center;
`

export const Plain = ({ items, onGet }: Props) => (
  <Root>
    <Paper>
      <Typography type="title" gutterBottom>
        Welcome to react-best-practices 2017years !
      </Typography>

      <br />

      <Typography type="caption" gutterBottom>
        Access http://localhost:8080/items response !!
      </Typography>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell numeric>name</TableCell>
              <TableCell numeric>description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, name, description }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell numeric>{name}</TableCell>
                <TableCell numeric>{description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <br />
      <br />
      <br />
      <Link to="/signout">
        <Button raised color="secondary">
          SignOut
        </Button>
      </Link>
      <br />
    </Paper>
  </Root>
)

export default enhance(Plain)
