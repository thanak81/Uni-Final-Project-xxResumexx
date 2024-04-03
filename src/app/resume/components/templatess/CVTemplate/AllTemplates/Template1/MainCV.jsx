import React from "react";
import { useQuery } from "@tanstack/react-query";
import Tabs from "../../../../TabsComp";
import axios from "axios";
import { ResumeAPI } from "../../../../../api/ResumeAPI";

function MainCV() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["cvData"],
  //   queryFn: () => axios.get(`http://localhost:3001/cv/getCV`).then((res)=> res.data)
  // });

  const { data, isLoading, error } = useQuery({
    queryKey: ["cvData"],
    queryFn: () => ResumeAPI.getAll(),
  });
  console.log(ResumeAPI.getAll());
  if (error) return <p>There was an error while fetching data</p>;
  return (
    <div className="flex justify-center items-center">
      <Tabs data={data} isLoading={isLoading} />
    </div>
  );
}

export default MainCV;
