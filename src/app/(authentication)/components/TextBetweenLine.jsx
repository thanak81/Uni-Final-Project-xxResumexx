import React from "react";

function TextBetweenLine({children}) {
  return (
    <section className="relative flex items-center w-full  text-near_normal">
      <section className="flex-grow border-t border-white"></section>
      <span className="flex-shrink mx-4 text-white">{children}</span>
      <section className="flex-grow border-t border-white"></section>
    </section>
  );
}

export default TextBetweenLine;
