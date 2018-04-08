import React from "react";
import styled from "styled-components";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl as MuiFormControl } from "material-ui/Form";
import Select from "material-ui/Select";

export default ({ category, onSearch }) => (
  <div>
    <FormControl>
      <InputLabel htmlFor="category-simple">category</InputLabel>
      <Select
        value={category}
        onChange={onSearch}
        inputProps={{
          name: "category",
          id: "category-simple"
        }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="foo">foo</MenuItem>
        <MenuItem value="bar">bar</MenuItem>
        <MenuItem value="baz">baz</MenuItem>
      </Select>
    </FormControl>
  </div>
);

const FormControl = styled(MuiFormControl)`
  min-width: 12rem !important;
`;
