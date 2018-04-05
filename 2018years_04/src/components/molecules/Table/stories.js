import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Table from "./Table";

storiesOf("molecules|Table", module)
  .addDecorator(withKnobs)
  .add("Table", () => (
    <Table
      items={[
        { id: 1, name: "foo", description: "bar" },
        { id: 2, name: "baz", description: "foobar" }
      ]}
    />
  ));
