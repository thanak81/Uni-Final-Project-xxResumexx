import { Breadcrumbs } from "@nextui-org/react";
import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";
import TabComp from "../main-feature/components/TabComp";
import NavBar from "../components/NavBar";

function layout({ children }) {
  return (
    <>
      <div className="py-10 px-5 lg:h-screen lg:overflow-y-hidden w-full">
        <div className="mt-10 flex  items-center w-full justify-between">
          <BreadCrumbComp />
        </div>
        {children}
      </div>
      <div className="fixed w-full top-0 z-[999]">
        <NavBar />
      </div>
    </>
  );
}

export default layout;
