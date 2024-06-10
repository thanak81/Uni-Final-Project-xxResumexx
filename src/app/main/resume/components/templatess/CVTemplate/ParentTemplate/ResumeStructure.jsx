

import dynamic from "next/dynamic";

import React, { useRef } from "react";
import styles from "./ResumeStructure.module.css";
import ReactPDF, { Document, PDFViewer, Page, StyleSheet, Text, View, usePDF } from "@react-pdf/renderer";

function ResumeStructure({ template, bgColor, printRef }) {
  
  const style = StyleSheet.create({
    viewer: {
      width: "240mm", //the pdf viewer will take up all of the width and height
      height: "5500pt",
  },
  })

const PDFViewer = dynamic(
  () => import ("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
  return (
    <>
      {template.id === 4 ? (
       <PDFViewer style={style.viewer}>
        
        {template.template}
       </PDFViewer>
      ): (
        <div className={styles.page}>
        {/* <div ref={printRef}>{template}</div> */}
        {template.template}
      </div>
      )}
     
    </>
  );
}

export default ResumeStructure;
