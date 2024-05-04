import React from "react";

function RightSidebar({ children, activeRight }) {
  return (
    <div
      className={`h-screen bg-blue-500  ${
        !activeRight ? "" : "w-[15rem]"
      } `}
    >
      {children}
    </div>
  );
}

export default RightSidebar;
