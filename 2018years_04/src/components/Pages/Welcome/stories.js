import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Welcome from "./Welcome";
import Search from "components/molecules/Search/Form";
import Table from "components/molecules/Table/Table";

storiesOf("pages|Welcome", module)
  .addDecorator(withKnobs)
  .add("Welcome", () => (
    <Welcome>
      <div>
        <br />
        <br />
        <Search category="" onSearch={action("onSearch")} />
        <Table
          items={[
            { id: 1, name: "foo", description: "bar" },
            { id: 2, name: "baz", description: "foobar" }
          ]}
        />
      </div>
    </Welcome>
  ));
