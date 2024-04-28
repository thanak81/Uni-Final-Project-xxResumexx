import React, { useState } from "react";
import ResumeStructure from "../../ParentTemplate/ResumeStructure";
import PersonalTemplate from "./PersonalTemplate";
import { useParams } from "react-router-dom";
import { ResumeAPI } from "../../../../../api/ResumeAPI";
import { useQuery } from "@tanstack/react-query";
import CreateCV from "../../../../../pages/CreateCV/CreateCV";
import MainForm from "../../../../new form ui/MainForm";

function CV2() {
  let { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["skills"],
    queryFn: () => ResumeAPI.getById(id),
    refetchOnWindowFocus: false,
  });

  

  if (error) return <div>There was an error while fetching data</div>;
  if (isLoading) return <div>Loading....</div>;
  return (
    <CreateCV>
        <MainForm />
      <div className=" lg:flex mt-[-30px] h-full">
        <ResumeStructure>
          <PersonalTemplate data={data} />
        </ResumeStructure>
      </div>
    </CreateCV>
  );
}

export default CV2;
