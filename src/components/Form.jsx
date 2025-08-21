import Input from "./Input.jsx";
import Button from "./Button.jsx";

const Form = ({ inputValue, onChange, onClick }) => {
  return (
    <div className="min-w-md m-8 p-4 flex flex-col gap-4 bg-stone-50 border-1 border-stone-200 rounded">
      <h2 className="text-xl text-gray-800 text-left border-b-2 border-gray-200">
        Enter your details to test the form
      </h2>
      <Input
        label="Enter your name"
        required
        value={inputValue.name}
        onChange={(event) => onChange(event.target.value, "name")}
      />
      <Input
        label="Enter your password"
        required
        type="password"
        value={inputValue.password}
        onChange={(event) => onChange(event.target.value, "password")}
      />
      <Button type="primary" onClick={onClick}>
        Sign in
      </Button>
    </div>
  );
};

export default Form;
