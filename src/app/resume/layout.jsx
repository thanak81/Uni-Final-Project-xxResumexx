import { Breadcrumbs } from "@nextui-org/react";
import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";

function layout({ children }) {
  return (
    <div className="p-10 h-screen overflow-y-hidden">
      <div>
        <BreadCrumbComp />
      </div>
      {children}
    </div>
  );
}

export default layout;
