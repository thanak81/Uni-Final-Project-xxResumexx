import React from "react";
import styles from "./ResumeStructure.module.css";

function ResumeStructure({ children , bgColor }) {
  // const printRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current,
  // });
  return (
    <div className={` ${bgColor} text-black`}>
      <div className={styles.page}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ResumeStructure;
