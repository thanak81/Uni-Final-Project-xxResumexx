import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  import  { OurFileRouter } from "@/app/api/uploadthing/core";
   
  export const UploadButton = generateUploadButton();
  export const UploadDropzone = generateUploadDropzone();