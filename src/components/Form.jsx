import { useContext } from "react";
import { FormContext } from "../store/form-context.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const Form = () => {
  const { state, dispatch } = useContext(FormContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: "UPDATE_INPUT",
      field: name,
      value: value,
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  return (
    <div className="min-w-md m-8 p-4 flex flex-col gap-4 bg-stone-50 border-1 border-stone-200 rounded">
      <h2 className="text-xl text-gray-800 text-left border-b-2 border-gray-200">
        Enter your details to test the form
      </h2>
      <Input
        label="Enter your name"
        required
        name="name"
        value={state.name}
        onChange={handleInputChange}
      />
      <Input
        label="Enter your password"
        required
        type="password"
        name="password"
        value={state.password}
        onChange={handleInputChange}
      />
      <Button type="primary" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default Form;
