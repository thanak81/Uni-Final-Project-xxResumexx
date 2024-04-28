import React from "react";
import { Badge, Code, DataList, Flex } from "@radix-ui/themes";
import Link from "next/link";

function DataListDetails({ data ,allData}) {
  console.log(data)
  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label minWidth="88px">ID</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">{data.id}</Code>
            {/* <IconButton
    size="1"
    aria-label="Copy value"
    color="gray"
    variant="ghost"
  >
    <CopyIcon />
  </IconButton> */}
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Name</DataList.Label>
        <DataList.Value>{data.title}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">User ID</DataList.Label>
        <DataList.Value>
          <Link target="_blank" href="https://workos.com">
            {data.user_id}
          </Link>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">Resume Rate</DataList.Label>
        <DataList.Value>
          <Badge color="jade" variant="soft" radius="full">
            75%
          </Badge>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}

export default DataListDetails;
