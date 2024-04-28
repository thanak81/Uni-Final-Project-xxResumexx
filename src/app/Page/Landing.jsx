"use client";
import React from "react";
import CardComp from "../components/CardComp";
import { Box, Flex } from "@radix-ui/themes";
import { deleteResume, getAllResume } from "../services/resumeService";
import { useMutation, useQuery } from "react-query";
import { Skeleton } from "@nextui-org/react";

function Landing() {
  // const response = await getAllResume();
  // get all resume
  const { isLoading, data, error, isError } = useQuery("resume", getAllResume);
  // delete resume
  const mutation = useMutation({
    mutationFn: (id) => deleteResume(id)
  })
  console.log(data);
  if (isLoading) {
    return <span>
      <Skeleton/>
    </span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="flex gap-5 flex-wrap">
      {/* {response.payload.map((data,index) => (
        <div className="flex" key={data._id}>
            <CardComp data={data} index={index} />
        </div>
      ))} */}
      {data.payload.map((dat, index) => (
        <div className="flex" key={dat.id}>
          <CardComp data={dat}  index={index} mutation={mutation} />
        </div>
      ))}
    </div>
  );
}

export default Landing;
