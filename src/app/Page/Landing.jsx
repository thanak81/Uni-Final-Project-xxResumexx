"use client";
import React from "react";
import CardComp from "../components/CardComp";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { deleteResume, getAllResume } from "../services/resumeService";
import { useMutation, useQuery } from "react-query";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";

function Landing() {
  // const response = await getAllResume();
  // get all resume
  const { isLoading, data, error, isError } = useQuery("resume", getAllResume);
  // delete resume
  const mutation = useMutation({
    mutationFn: (id) => deleteResume(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resume"] });
    },
  });
  console.log(data);
  if (isLoading) {
    return (
      <span>
        Loading......
      </span>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      {data.length <= 0 && (
        <>
          <Heading color="green">No recent resume. Go create one!</Heading>
          <Button>
            <Link href="/resume/create">Lets go</Link>
          </Button>
        </>
      )}
      <div className="flex gap-5 justify-center flex-wrap">
        {/* {response.payload.map((data,index) => (
        <div className="flex" key={data._id}>
            <CardComp data={data} index={index} />
        </div>
      ))} */}
        {data?.map((dat, index) => (
          <div className="flex" key={dat.id}>
            <CardComp data={dat} index={index}  mutation={mutation} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Landing;
