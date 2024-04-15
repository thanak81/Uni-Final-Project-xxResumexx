import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { useStore } from "../../state/GlobalState";
import InputComp from "../../components/InputComp";
import { z, ZodType } from "zod"; // Add new import
import { useFormContext } from "react-hook-form";

export const Schema = z.object({
  basics: z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    number: z
      .string()
      .refine((value) => value !== "", { message: "Phone number is required" }),
      // .refine((value) => phoneNumberRegex.test(value), {
      //   message: "Invalid phone number format.",
      // }),
    address: z
      .string()
      .min(3, { message: "Address must be at least 3 characters long" }),
  }),
});

function PersonalForm({ active }) {
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);

  const address = useStore((state) => state.address);
  const setAddress = useStore((state) => state.setAddress);

  const email = useStore((state) => state.email);
  const setEmail = useStore((state) => state.setEmail);
  const number = useStore((state) => state.number);
  const setNumber = useStore((state) => state.setNumber);

  const { register,formState: {errors} } = useFormContext();

  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Personal Data
            </Heading>
          }
          subtitle={<small>Personal Info Tip</small>}
        >
          <Text className="text-sm">
            Provide much details about yourself as much as posible.
          </Text>
        </AccordionItem>
      </Accordion>

      <div className={`flex ${active ? "flex-col" : ""} gap-2 w-full`}>
        <InputComp
          value={name}
          onValueChange={setName}
          label={"Full name"}
          name={"basics.name"}
          error={errors?.basics?.name?.message}
        />
        <InputComp
          value={email}
          onValueChange={setEmail}
          label={"Email"}
          name={"basics.email"}
          error={errors?.basics?.email?.message}
        />
      </div>
      <div className="w-full">
        <InputComp
          label={"Address"}
          value={address}
          onValueChange={setAddress}
          name={"basics.address"}
          error={errors?.basics?.address?.message}
        />
      </div>
      <div className="w-full">
        <InputComp
          label={"Phone Number"}
          value={number}
          onValueChange={setNumber}
          name={"basics.number"}
          error={errors?.basics?.number?.message}
          // isInvalid = {true}
          // error={"sdsd"}
        />
      </div>
      <div className="w-full">
        <Textarea
          variant="bordered"
          label="Description"
          name={"basics.description"}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
