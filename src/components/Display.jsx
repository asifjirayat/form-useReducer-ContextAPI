const Display = ({ submittedData }) => {
  return (
    <div className="w-md mt-4 mb-8 p-4 rounded text-white text-sm bg-gray-900 font-mono">
      <h3 className="text-md text-xl font-bold text-gray-200 mb-2">
        Submitted Data:
      </h3>
      <pre className="p-4 text-xl rounded-lg whitespace-pre-wrap break-words">
        {JSON.stringify(submittedData, null, 2)}
      </pre>
    </div>
  );
};

export default Display;
