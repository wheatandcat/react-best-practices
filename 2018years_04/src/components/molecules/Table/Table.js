import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

export default ({ items }) => (
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
);
