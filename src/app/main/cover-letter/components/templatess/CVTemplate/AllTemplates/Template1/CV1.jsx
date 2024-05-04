import React, { useRef, useState } from "react";
import PersonalTemplate from "./PersonalTemplate";
import { useParams } from "react-router-dom";
import { ResumeAPI } from "../../../../../api/ResumeAPI";
import { useQuery } from "@tanstack/react-query";
import ResumeStructure from "../../ParentTemplate/ResumeStructure";
import EditCV from "../../../../../pages/EditCV/EditCV";

function CV1() {
  let { id } = useParams();

  const [datas, setDatas] = useState();

  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const cvData = JSON.parse(event.target.result);
      setDatas(cvData);
    };
    reader.readAsText(file);
  };

  const handleDownload = (data, fileName, e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  // const cvData = JSON.parse(localStorage.getItem("cvData"));

  // const fetchCVbyID = (cvId) => {
  //   return axios.get(`http://localhost:3001/cv/getCV/${cvId}`);
  // };

  const { data, isLoading, error } = useQuery({
    queryKey: ["skills"],
    queryFn: () => ResumeAPI.getById(id),
    refetchOnWindowFocus: false,
  });

  const [editMode, setEditMode] = useState(false);
  const editBtnRef = useRef(null);
  const inputRef = useRef();

  const closeEditMode = () => {
    setEditMode(false);
  };

  const openEditMode = () => {
    setEditMode(true);
  };

  const onEditHandler = () => {
    closeEditMode();
  };

  if (error) return <div>There was an error while fetching data</div>;
  if (isLoading) return <div>Loading....</div>;

  return (
    <>
    <EditCV/>
      <ResumeStructure>
        <PersonalTemplate data={data} isLoading={isLoading} error={error} />
      </ResumeStructure>
    </>
  );
}

export default CV1;
