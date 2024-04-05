import React from "react";

function layout({ children }) {
  return (
    <div className="lg:p-0 h-full">
        {children}
    </div>
  );
}

export default layout;
