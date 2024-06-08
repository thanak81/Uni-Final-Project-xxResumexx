import React, { useRef } from "react";
import styles from "./ResumeStructure.module.css";
import { Document, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

function ResumeStructure({ template, bgColor, printRef }) {
  
  const styles = StyleSheet.create({
    viewer: {
      width: "240mm", //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
  },
  })
  console.log(template.id)
  return (
    <>
      {template.id === 4 ? (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            {template.template}
        </PDFViewer>
      ): (
        <div className={styles.page}>
        {/* <div ref={printRef}>{template}</div> */}
        <div>{template.template}</div>
      </div>
      )}
     
    </>
  );
}

export default ResumeStructure;
