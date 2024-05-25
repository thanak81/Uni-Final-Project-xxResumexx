"use client"
import { Flex, Text, Button, Heading } from "@radix-ui/themes";
import Landing from "./Page/Landing";
import BardComp from "./components/BardComp";

import { useTheme } from "next-themes";
import ImageUpload from "./upload/page";
import { useState } from "react";
import { aiData } from "./main/resume/state/GlobalState";
export default function Home() {
  // const [data,setData]=useState()
  const data = aiData(state=> state.value);
  const setData = aiData(state=>state.setValue)
  return (
    <>
      <main className="flex h-full flex-col  w-full p-24">
      <BardComp data={data} setData={setData}/>
          <Landing />
      </main>
    </>
  );
}
