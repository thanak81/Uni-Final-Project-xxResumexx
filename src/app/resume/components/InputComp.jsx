"use client"

import { Input } from "@nextui-org/react";
import React from "react";
import { useFormContext } from "react-hook-form";

function InputComp({name,error, ...props }) {
  const { register,formState: {errors} } = useFormContext();
  console.log(errors.error)

  return (
    <Input
      radius="sm"
      key="inside"
      variant="bordered"
      labelPlacement="inside"
    isInvalid= {error ?  true : false}
      errorMessage={Object.keys(errors).length ===0 ?"" : error }
      {...props}
      {... register(name)}
      // onValueChange={setValue}
    />
  );
}

export default InputComp;
