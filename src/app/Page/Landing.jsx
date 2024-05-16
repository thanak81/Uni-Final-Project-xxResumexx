"use client";
import React, { Suspense } from "react";
import CardComp from "../components/CardComp";
import { Box, Button, Flex, Heading, Separator } from "@radix-ui/themes";
import { deleteResume, getAllResume } from "../services/resumeService";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Skeleton, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { deleteCoverLetter, getAllCoverLetter } from "../services/coverLetterService";
import CardCompCover from "../main/cover-letter/components/CardComp";

function Landing() {
  const queryClient = useQueryClient();
  // const response = await getAllResume();
  // get all resume
  const { isLoading, data, error, isError } = useQuery(
    ["resume"],
    getAllResume
  );

  const {
    isLoading: coverLoading,
    data: coverData,
    error: coverError,
    isError: coverIsError,
  } = useQuery(["cover-letter"], getAllCoverLetter);
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

  const mutationCover = useMutation({
    onMutate: async (id) => {
      await queryClient.cancelMutations({ queryKey: ["cover-letter"] });

      const previousCover = queryClient.getQueryData(["cover-letter"]);
      queryClient.setQueryData(["cover-letter"], (old) => [...old, id]);

      return { previousCover };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["cover-letter"], context.previousCover);
    },
    mutationFn: (id) => deleteCoverLetter(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cover-letter"] });
    },
    onSuccess: () => {
      toast.success("Cover Letter successfully removed", {
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
    return (
      <div className="flex items-center justify-center h-[30rem]">
        <Spinner color="Warning" />
      </div>
    );
  }
  if (coverLoading) {
    return (
      <div className="flex items-center justify-center h-[30rem]">
        <Spinner color="Warning" />
      </div>
    );
  }

  if (isError && coverIsError) {
    return <span>Error: {coverError?.message}</span>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="self-start">
        <Heading className="mb-5">Recent Resume</Heading>
        {data.length <= 0 && (
          <>
            <Heading color="green" className="mb-5">No recent resume. Go create one!</Heading>
            <Button>
              <Link href="/main/resume/create">Lets go</Link>
            </Button>
          </>
        )}
        <div className="flex gap-5 justify-start flex-wrap">
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
      </div>
      <Separator className="w-full" />
      <div className="self-start">
        <Heading className="mb-5">Recent Cover Letter</Heading>
        {coverData.length <= 0 && (
          <>
            <Heading color="green" className="mb-5">
              No recent Cover Letter. Go create one!
            </Heading>
            <Button>
              <Link href="/main/cover-letter/create">Lets go</Link>
            </Button>
          </>
        )}
        <div className="flex gap-5 justify-center flex-wrap">
          {coverData?.map((dat, index) => (
            <div className="flex" key={dat.id}>
              <CardCompCover data={dat} index={index} mutation={mutationCover} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
