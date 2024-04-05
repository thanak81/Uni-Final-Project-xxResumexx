import { Breadcrumbs } from "@nextui-org/react";
import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";

function layout({ children }) {
  return (
    <div className="p-10 lg:h-screen lg:overflow-y-hidden">
      <div className="mt-10">
        <BreadCrumbComp />
      </div>
      {children}
    </div>
  );
}

export default layout;
