import React from "react";

type AlertProps = { children: React.ReactNode };

const Alert: React.FC<AlertProps> = ({ children }) => {
  return (
    <div className="relative w-full p-4 text-white bg-blue-500 rounded-lg">
      {children}
    </div>
  );
};

export default React.memo(Alert);
