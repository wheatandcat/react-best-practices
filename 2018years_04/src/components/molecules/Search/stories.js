import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Form from "./Form";

storiesOf("molecules|Search", module)
  .addDecorator(withKnobs)
  .add("Form", () => <Form category="" onSearch={action("onSearch")} />);
