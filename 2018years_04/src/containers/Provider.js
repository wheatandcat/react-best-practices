import React, { createContext } from "react";

const Context = createContext();
const { Provider } = Context;

export default ({ children, auth }) => (
  <Provider value={{ auth }}>{children}</Provider>
);

export const Consumer = Context.Consumer;
