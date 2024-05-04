import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { z, ZodType } from "zod"; // Add new import
import { useFormContext } from "react-hook-form";
import Tiptap from "../../components/TipTap";
import { Label } from "@radix-ui/themes/dist/cjs/components/context-menu";

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

function LetterDetailForm({ active, autoSaveData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Letters Details
            </Heading>
          }
          subtitle={<small>Letters Info Tip</small>}
        >
          <Text className="text-sm">
            3–4 paragraphs explaining why youre the perect candidate for a
            specific job{" "}
          </Text>
        </AccordionItem>
      </Accordion>

      <div className="w-full">
        <Tiptap
          value={"data.letter.summary"}
            data={
              autoSaveData?.data?.letter?.summary
                ?  autoSaveData?.data?.letter?.summary
                : ""
            }
        />
      </div>
    </div>
  );
}

export default LetterDetailForm;
