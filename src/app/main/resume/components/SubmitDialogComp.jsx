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
function SubmitDialogComp({ onSubmit, printResume }) {
  const active = useActive((state) => state.active);
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
              onClick={onSubmit}
              title="Save Resume"
              className="cursor-pointer"
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
