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

function Dialogs({ data ,mutation}) {
  console.log(data.id)
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="yellow">
          <InfoIcon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Flex justify="between">
          <Dialog.Title>Resume Infomation</Dialog.Title>
          <Button color="red" onClick={()=> mutation.mutate(data.id)}>
            <RemoveIcon />
          </Button>
        </Flex>
        <Dialog.Description size="2" mb="4">
          Created Date : 05/12/2024
        </Dialog.Description>

        <DataListDetails data={data} />

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button>Edit</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default Dialogs;
