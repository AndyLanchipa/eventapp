import React, { useState } from "react";

export const Popover: PopoverComponent = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && <div className="absolute bg-white w-20">{content}</div>}
    </>
  );
};

type PopoverType = {
  children: React.ReactNode;
  content: React.ReactNode;
};

type PopoverComponent = (props: PopoverType) => React.ReactElement;
