import React from "react";
import {
  Badge,
  Box,
  Button,
  Code,
  DataList,
  Dialog,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";
import { useActive } from "../state/GlobalState";
import { useFormContext } from "react-hook-form";
function SubmitDialogComp({ onSubmit,isSubmitting, printResume }) {
  const active = useActive((state) => state.active);
  console.log(isSubmitting)
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button title="Submit Resume" className="cursor-pointer">
          <DownloadIcon /> Submit Resume
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Flex justify="between" direction={"column"} gap={"5"}>
          {active ? (
            <Box>
              <Dialog.Title>Print Resume as PDF</Dialog.Title>
              {/* <DeleteResumeButton mutation={mutation} data={data} /> */}
              <Button
                title="Print Resume as PDF"
                onClick={printResume}
                className="cursor-pointer"
              >
                <DownloadIcon /> Print Resume
              </Button>
            </Box>
          ): (
            <b className="text-yellow-500">**To print resume as a PDF. Open Resume Preview**</b>
          )}
          <Box>
            <Dialog.Title>Save Resume</Dialog.Title>
            <Button
            loading={isSubmitting}
              onClick={onSubmit}
              title="Save Resume"
              // disabled= {isSubmitting}
              // color={`${isSubmitting? "gray" : ""}`}
              className={`cursor-pointer ${isSubmitting? "bg-slate-500" : ""}`}
            >
              <DownloadIcon /> Save Resume
            </Button>
          </Box>
          {/* <DeleteResumeButton mutation={mutation} data={data} /> */}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default SubmitDialogComp;
