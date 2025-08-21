const Button = ({ children, type = "primary", ...rest }) => {
  const baseButtonClasses =
    "w-full  h-auto p-2 rounded font-bold cursor-pointer";
  let typeClasses = "";

  if (type === "primary")
    typeClasses = "bg-blue-600 text-white hover:bg-blue-700 transition-colors";

  const combinedClasses = `${baseButtonClasses} ${typeClasses}`;

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
