import TabComp from "@/app/main-feature/components/TabComp";
import React from "react";

function layout({ children }) {
  return (
    <>
      <div className="flex items-end w-full justify-center mt-5 lg:mt-0">
        <TabComp />
      </div>
      {children}
    </>
  );
}

export default layout;
