import { createContext } from "react";

export const FormContext = createContext({
  state: {
    name: "",
    password: "",
  },
  dispatch: () => {},
});
