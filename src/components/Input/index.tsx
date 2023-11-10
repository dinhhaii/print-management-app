import React from "react";

type InputProps = {};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      type="text"
      placeholder="Default input"
      className="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
    ></input>
  );
};

export default React.memo(Input);
