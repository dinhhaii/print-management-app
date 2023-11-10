import React from "react";

type CheckboxProps = {};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <div className="block min-h-6 pl-7">
      <label>
        <input
          id="checkbox-1"
          className="w-5 h-5 ease text-base -ml-7 rounded-1.4  checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
          type="checkbox"
        />
        <label
          for="checkbox-1"
          className="cursor-pointer select-none text-slate-700"
        >
          Checkbox
        </label>
      </label>
    </div>
  );
};

export default React.memo(Checkbox);
