"use client";

import { cn } from "@/app/util/cn";
import { Input } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { useFormContext } from "react-hook-form";

function InputComp({ name, error, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { theme } = useTheme();
  return (
    <Input
      aria-label = "Input"
      radius="sm"
      key="inside"
      // variant="bordered"
      labelPlacement="inside"
      
      classNames={{inputWrapper: "rounded ",base: "focus:border-2 focus:border-blue-500"}}
      className={cn(
        "  focus:border-2  focus:border-blue-500 rounded  border-black",
        {}
      )}
      // className = {{input: "bg-white"}}
      // isInvalid= {error ?  true : false}
      //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
      {...props}
      {...register(name)}
      // onValueChange={setValue}
    />
  );
}

export default InputComp;
