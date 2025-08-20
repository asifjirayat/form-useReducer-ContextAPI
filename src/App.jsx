import Form from "./components/Form.jsx";

const App = () => {
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
      <main className="flex flex-col flex-grow items-center justify-center">
        <Form />
      </main>
      <footer className="flex flex-col items-center justify-center p-4 bg-stone-50">
        <p>&copy; React form with useReducer & Context API</p>
      </footer>
    </div>
  );
};

export default App;
