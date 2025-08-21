const Input = ({ type = "text", label, required, ...rest }) => {
  const labelClasses = "text-sm text-gray-500 mb-2";
  const inputClasses =
    "text-md font-bold text-gray-500 p-2 ring-1 ring-gray-300 rounded h-auto focus:bg-white";

  return (
    <div className="flex flex-col">
      <label className={labelClasses}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input type={type} className={inputClasses} {...rest} />
    </div>
  );
};

export default Input;
