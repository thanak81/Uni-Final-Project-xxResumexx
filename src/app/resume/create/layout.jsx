import React from "react";

function layout({ children }) {
  return (
    <div className="pt-28 lg:p-0 h-full overflow-y-hidden">
        {children}
    </div>
  );
}

export default layout;
