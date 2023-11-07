import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// www.creative-tim.com/learning-lab/tailwind/html/button/argon-dashboard/

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-blue-500 to-violet-500 leading-normal text-xs ease-in tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md">
      {children}
    </button>
  );
};

export default React.memo(Button);
