import { Box, Flex, Heading, HoverCard, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function HoverCardComp({ avatar, name, email }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>{avatar}</HoverCard.Trigger>
      <HoverCard.Content maxWidth={"300px"}>
        <Flex gap="" direction={"column"}>
          <Box>
            <Heading size="3" as="h3">
              {name}
            </Heading>
            <Text as="div" size="2" color="gray">
              {email}
            </Text>
          </Box>
          <Box className="mt-3">
            <Link
              className="cursor-pointer bg-red-500 px-3 py-1 rounded text-sm font-semibold"
              href="/api/auth/signout"
            >
              Log out
            </Link>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export default HoverCardComp;
