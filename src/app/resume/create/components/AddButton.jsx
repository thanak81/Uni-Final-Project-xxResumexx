import AddIcon from "@/app/components/icons/AddIcon";
import { Button } from "@radix-ui/themes";
import React from "react";

function AddButton({handleAdd}) {
  return (
    <Button onClick={handleAdd} className="cursor-pointer">
      <AddIcon /> Add More
    </Button>
  );
}

export default AddButton;
