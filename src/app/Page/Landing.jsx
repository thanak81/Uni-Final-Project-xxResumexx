import React from "react";
import CardComp from "../components/CardComp";
import { Box, Flex } from "@radix-ui/themes";
import { getAllResume } from "../services/resumeService";

async function Landing() {
  const response = await getAllResume();
  return (
    <div className="flex gap-5 flex-wrap">
      {response.payload.map((data,index) => (
        <div className="flex" key={data._id}>
            <CardComp data={data} index={index} />
        </div>
      ))}
    </div>
  );
}

export default Landing;
