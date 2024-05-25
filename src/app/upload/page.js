"use client";

import { UploadButton, UploadDropzone } from "@/app/util/uploadthing";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { getImage } from "../main/resume/state/GlobalState";
import { Button } from "@radix-ui/themes";

// import { UploadButton } from "~/utils/uploadthing";

export default function ImageUpload({ value, setValue }) {
  const [imageUrl, setImageUrl] = useState("");
  const theme = useTheme();

  return (
    <div className="flex flex-col items-center w-full mb-5">
      <UploadButton
        appearance={{
          label: {
            color: "white",
          },
          allowedContent: {
            color: "white",
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImageUrl(res[0].url);
          setValue(value, res[0].url);
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
