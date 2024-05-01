import React, { useRef } from "react";
import styles from "./ResumeStructure.module.css";

function ResumeStructure({ template, bgColor , printRef }) {
  return (
      <div className={styles.page}>
        {/* <div ref={printRef}>{template}</div> */}
        <div>{template}</div>
      </div>
  );
}

export default ResumeStructure;
