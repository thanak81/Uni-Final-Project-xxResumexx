"use client"

import { Input } from "@nextui-org/react";
import React from "react";
import { useFormContext } from "react-hook-form";

function InputComp({name, ...props }) {
  const { register,formState: {errors} } = useFormContext();
  return (
    <Input
      radius="sm"
      key="inside"
      variant="bordered"
      labelPlacement="inside"
    // isInvalid= {errors?.name ?  errors?.name : false}
    //   errorMessage={errors?.name && errors?.name.message}
      {...props}
      {... register(name)}
      // onValueChange={setValue}
    />
  );
}

export default InputComp;
