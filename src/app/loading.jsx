import { Spinner } from "@nextui-org/react";
import React from "react";

function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner color="Warning" />
    </div>
  );
}

export default loading;
