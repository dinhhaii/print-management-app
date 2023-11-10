import React from "react";

type BadgeProps = {
  children?: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="py-1.4 px-2.5 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-blue-500 to-violet-500 align-baseline font-bold uppercase leading-none text-white">
      {children}
    </span>
  );
};

export default React.memo(Badge);
