import React from "react";
import CardComp from "../components/CardComp";
import { Box, Flex } from "@radix-ui/themes";

async function Landing() {
  const data = await fetch("http://localhost:3001/cv/getCV");
  const response = await data.json();

  return (
    <div className="flex gap-5">
      {response.map((data) => (
        <div className="flex" key={data._id}>
            <CardComp data={data} />
        </div>
      ))}
    </div>
  );
}

export default Landing;
