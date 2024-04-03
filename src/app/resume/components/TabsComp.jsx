"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Divider } from "@nextui-org/react";
import Form from "../create/Form";
import Template1 from "../create/Template1";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProgressCard from "./ProgressCard";

function TabsComp() {
  return (
    <div className="">
      <Tabs aria-label="Options" className="flex">
        <Tab key="edit" title="Photos">
          <Form />
        </Tab>

        <Tab key="design" title="Music">
          <Template1 />
        </Tab>
      
        <Tab key="videos" title="Videos">
          <div className="flex gap-3 flex-col lg:flex-row justify-center mt-5">
            <Form />
            <Divider orientation="vertical" />
            <div className="hidden lg:block">
              <Template1 />
            </div>
            <Divider orientation="vertical" />
            <div className="self-center lg:self-start">
              <ProgressCard />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsComp;
