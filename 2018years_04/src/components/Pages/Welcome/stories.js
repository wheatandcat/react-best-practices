import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Welcome from "./Welcome";
import Table from "components/molecules/Table/Table";

storiesOf("pages|Welcome", module)
  .addDecorator(withKnobs)
  .add("Welcome", () => (
    <Welcome>
      <Table
        items={[
          { id: 1, name: "foo", description: "bar" },
          { id: 2, name: "baz", description: "foobar" }
        ]}
      />
    </Welcome>
  ));
