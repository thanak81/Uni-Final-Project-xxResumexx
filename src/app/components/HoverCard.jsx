import { Box, Flex, Heading, HoverCard, Text } from "@radix-ui/themes";
import React from "react";

function HoverCardComp({ avatar , name , email}) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>{avatar}</HoverCard.Trigger>
      <HoverCard.Content maxWidth={"300px"}>
        <Flex gap="5">
          <Box>
            <Heading size="3" as="h3">
              {name}
            </Heading>
            <Text as="div" size="2" color="gray">
              {email}
            </Text>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export default HoverCardComp;
