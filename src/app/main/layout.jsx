import { Breadcrumbs } from "@nextui-org/react";
import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";
import TabComp from "../main-feature/components/TabComp";

function layout({ children }) {
  return (
    <div className="p-10 lg:h-screen lg:overflow-y-hidden w-full">
      <div className="mt-10 flex  items-center w-full justify-between">
        <BreadCrumbComp />
        <TabComp />
      </div>
      {children}
    </div>
  );
}

export default layout;
