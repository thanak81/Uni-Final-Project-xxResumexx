"use client";
import React from "react";
import CardComp from "../components/CardComp";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { deleteResume, getAllResume } from "../services/resumeService";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Skeleton, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

function Landing() {
  const queryClient = useQueryClient();
  // const response = await getAllResume();
  // get all resume
  const { isLoading, data, error, isError } = useQuery(
    ["resume"],
    getAllResume
  );

  console.log("data",data)

  // delete resume
  const mutation = useMutation({
    onMutate: async (id) => {
      await queryClient.cancelMutations({ queryKey: ["resume"] });

      const previousResume = queryClient.getQueryData(["resume"]);
      queryClient.setQueryData(["resume"], (old) => [...old, id]);

      return { previousResume };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["resume"], context.previousResume);
    },
    mutationFn: (id) => deleteResume(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["resume"] });
    },
    onSuccess: () => {
      toast.success("Resume successfully removed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    },
  });

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      {data.length<= 0 && (
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
            <CardComp data={dat} index={index} mutation={mutation} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Landing;
