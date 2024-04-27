"use client";

import React from "react";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../../globals.css";
import { Button } from "@radix-ui/themes";

const DeleteAccountButton = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button color="red" className="cursor-pointer text-white">
        Delete account
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
          account and remove your data from our servers.
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 20, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <Button color="gray" className="cursor-pointer text-white p-2  px-4 text-xs rounded">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button color="red" className="cursor-pointer text-white p-2 px-4 text-xs rounded">
              Yes, Delete account
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default DeleteAccountButton;
