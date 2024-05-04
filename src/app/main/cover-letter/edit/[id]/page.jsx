"use client";
import React, { useRef, useState } from "react";
import Form from "./Form";
import ProgressCard from "@/app/main/resume/components/ProgressCard";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useReactToPrint } from "react-to-print";
import { useActive, useActiveRight } from "@/app/main/resume/state/GlobalState";
import { createResume } from "@/app/services/resumeService";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import RightSidebar from "@/app/main-feature/RightSidebar";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import {
  createCoverLetter,
  getCoverLetterById,
  updateCoverLetter,
} from "@/app/services/coverLetterService";
import Template1Main from "../../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import Template2Main from "../../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Spinner } from "@nextui-org/react";
import { Button, Heading } from "@radix-ui/themes";
import Link from "next/link";
import FormProviderComp from "@/app/main/cover-letter/edit/[id]/FormProviderComp";

function EditCoverLetter({ params }) {
  const id = params.id;
  const queryClient = new useQueryClient();
  const {
    isLoading,
    data: coverLetterById,
    error,
    isError,
  } = useQuery("cover-letter", () => getCoverLetterById(id));

  const mutation = useMutation({
    mutationFn: (request) => updateCoverLetter(request, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cover-letter"] });
    },
  });

  const router = useRouter();
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Cover Letter",
  });

  const active = useActive((state) => state.active);
  const printCoverLetter = () => {
    if (active) {
      handlePrint();
    }
  };
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  let autoSaveData;
  if (typeof window !== "undefined") {
    autoSaveData = JSON.parse(localStorage.getItem("autoSavedCoverLetterData"));
  }

  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        {coverLetterById.payload ? (
          <FormProviderComp
            id={id}
            mutation={mutation}
            coverLetterById={coverLetterById}
            printCoverLetter={printCoverLetter}
            printRef={printRef}
            active={active}
          />
        ) : (
          <div className="flex flex-col items-center gap-5">
            <Heading>Resume not found 😥! Create one for free 😀!</Heading>
            <Button>
              <Link href="/main/resume/create">Create Resume</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default EditCoverLetter;
