import { useReducer } from "react";
import { FormContext } from "./store/form-context.js";
import { formReducer } from "./store/form-reducer.js";
import Form from "./components/Form.jsx";
import Display from "./components/Display.jsx";

const App = () => {
  const [state, dispatch] = useReducer(formReducer, { name: "", password: "" });

  const formCtx = { state, dispatch };

  return (
    <FormContext.Provider value={formCtx}>
      <div className="flex flex-col h-screen">
        <header className="flex flex-col items-center p-4 justify-center bg-stone-50">
          <h1 className="text-5xl font-bold text-gray-700 p-4">
            React form + useReducer & Context API
          </h1>
          <p className="text-md font-normal text-gray-500 mt-1">
            This app demonstrates usage of useReducer hook and Context API
          </p>
        </header>
        <main className="max-w-xl m-auto flex flex-col flex-grow items-center justify-center">
          {/* Form Input */}
          <Form />
          {/* Form Input Display */}
          <Display />
        </main>
        <footer className="flex flex-col items-center justify-center p-4 bg-stone-50">
          <p>&copy; React form with useReducer & Context API</p>
        </footer>
      </div>
    </FormContext.Provider>
  );
};

export default App;
