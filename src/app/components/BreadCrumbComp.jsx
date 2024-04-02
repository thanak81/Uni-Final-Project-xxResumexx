"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
function BreadCrumbComp() {
  const path = usePathname();
  const pathName = path.split("/").filter((path) => path);
  return (
    <Breadcrumbs>
      {pathName.map((path, index) => {
        let href = `/${pathName.slice(0, index + 1).join("/")}`;
        return(
         <BreadcrumbItem key={index} aria-label={`Go to ${(path.toLocaleUpperCase())}`} href={href}>{path.toLocaleUpperCase()}</BreadcrumbItem>)
      })}
    </Breadcrumbs>
  );
}

export default BreadCrumbComp;
