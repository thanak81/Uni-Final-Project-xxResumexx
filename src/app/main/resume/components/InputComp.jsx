"use client"

import { cn } from "@/util/cn";
import { Input } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { useFormContext } from "react-hook-form";

function InputComp({name,error, ...props }) {
  const { register,formState: {errors} } = useFormContext();
  const {theme } = useTheme();
console.log( theme,theme === "light")
  return (
    <Input
      radius="rounded-sm"
      key="inside"
      // variant="bordered"
      labelPlacement="inside"
      className={cn("  focus:border-2  focus:border-green-500ne rounded-xl border-2 border-blue-500",{
      })}
      // className = {{input: "bg-white"}}
    // isInvalid= {error ?  true : false}
    //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
      {...props}
      {... register(name)}
      // onValueChange={setValue}
    />
  );
}

export default InputComp;
