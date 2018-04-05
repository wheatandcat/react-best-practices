import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Page from "./Page";

storiesOf("pages|SignIn", module)
  .addDecorator(withKnobs)
  .add("Page", () => <Page />);
