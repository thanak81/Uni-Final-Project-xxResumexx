"use client";

import React from "react";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../globals.css";
import { Button } from "@radix-ui/themes";
import RemoveIcon from "./icons/RemoveIcon";

const DeleteResumeButton = ({ mutation, data }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button title="Delete resume" color="red" className="cursor-pointer">
          <RemoveIcon />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            This action cannot be undone. This will permanently delete your
            resume and its data from your account.
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 20, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <Button
                color="gray"
                className="cursor-pointer text-white p-2  px-4 text-xs rounded"
              >
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                onClick={() => mutation.mutate(data.id)}
                color="red"
                className="cursor-pointer text-white p-2 px-4 text-xs rounded"
              >
                Yes, Delete Resume
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteResumeButton;
