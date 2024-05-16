import {
  Badge,
  Button,
  Code,
  DataList,
  Dialog,
  Flex,
  Text,
} from "@radix-ui/themes";
import React from "react";
import InfoIcon from "./icons/InfoIcon";
import Link from "next/link";
import DataListDetails from "./DataListDetails";
import RemoveIcon from "./icons/RemoveIcon";
import DeleteResumeButton from "./DeleteResumeButton";

function Dialogs({ data, mutation, formattedDate }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          color="yellow"
          className="cursor-pointer"
          title={data.title}
        >
          <InfoIcon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Flex justify="between">
          <Dialog.Title>{data.title} Info</Dialog.Title>
          <DeleteResumeButton mutation={mutation} data={data} />
        </Flex>
        <Dialog.Description size="2" mb="4">
          Created Date : {formattedDate}
        </Dialog.Description>

        <DataListDetails data={data} />

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button title="Edit">
            <Link href={`/main/resume/edit/${data.id}`} >Edit</Link>
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default Dialogs;
