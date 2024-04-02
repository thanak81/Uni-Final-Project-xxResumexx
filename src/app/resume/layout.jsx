import { Breadcrumbs } from "@nextui-org/react";
import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";

function layout({ children }) {
  return (
    <div className="p-10">
      <div>
        <BreadCrumbComp />
      </div>
      {children}
    </div>
  );
}

export default layout;
