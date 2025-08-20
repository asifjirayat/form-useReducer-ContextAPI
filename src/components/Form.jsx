import React from "react";

const Form = () => {
  return (
    <div className="w-md m-8 p-4 flex flex-col gap-4 bg-stone-50 border-1 border-stone-200 rounded">
      <h2 className="text-xl text-gray-800 text-left border-b-2 border-gray-200">
        Enter your details to test the form
      </h2>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-2">
          Enter your Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="text-md font-bold text-gray-500 p-2 ring-1 ring-gray-300 rounded h-auto focus:bg-white"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-2">
          Enter your Password <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          className="text-md font-bold text-gray-500 p-2 ring-1 ring-gray-300 rounded h-auto focus:bg-white"
        />
      </div>
      <div className="flex">
        <button className="w-full bg-yellow-300 h-auto p-2 rounded font-bold text-gray-950 hover:bg-yellow-500">
          Sign in
        </button>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default Form;
