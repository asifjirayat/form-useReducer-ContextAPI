import { useState } from "react";
import Form from "./components/Form.jsx";

const App = () => {
  const [inputValue, setInputValue] = useState({ name: "", password: "" });

  const handleInputChange = (newValue, identifier) => {
    return setInputValue((prevValues) => {
      return {
        ...prevValues,
        [identifier]: newValue,
      };
    });
  };

  const handleSignIn = () => {
    console.log("Handle sign in called....");
  };

  return (
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
        <Form
          inputValue={inputValue}
          onChange={handleInputChange}
          onClick={handleSignIn}
        />
        {/* Form Input */}
        <div className="w-md p-4 rounded text-white text-sm bg-gray-900 font-mono">
          <p>Test</p>
        </div>
      </main>
      <footer className="flex flex-col items-center justify-center p-4 bg-stone-50">
        <p>&copy; React form with useReducer & Context API</p>
      </footer>
    </div>
  );
};

export default App;
