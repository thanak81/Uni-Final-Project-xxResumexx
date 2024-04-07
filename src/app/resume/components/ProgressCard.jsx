import DownloadIcon from "@/app/components/icons/DownloadIcon";
import {
  Button,
  Card,
  Flex,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { Divider } from "@nextui-org/react";

function ProgressCard({onSubmit}) {
  return (
    <Flex direction="column" gap="3" maxWidth="400px">
      <Card variant="surface">
        <Text as="div" size="2" weight="bold">
          Resume Rating
        </Text>
        <Text as="div" color="gray" size="2">
          Start building your next project in minutes
        </Text>
      </Card>
      <Button type="submit" onClick={onSubmit}>
        <DownloadIcon /> Submit
      </Button>
      <Divider />
      {/* <Heading size="4" mb="2" trim="start">
        Change Template
      </Heading>
      <ScrollArea type="always" scrollbars="horizontal" style={{ height: 300 }}>
        <Box p="2" pr="8">
          <Flex direction="row" gap="4">
            <Card variant="surface">
              <Text as="div" size="2" weight="bold">
                Resume Rating
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </Card>
            <Card variant="surface">
              <Text as="div" size="2" weight="bold">
                Resume Rating
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </Card>
          </Flex>
        </Box>
      </ScrollArea> */}
    </Flex>
  );
}

export default ProgressCard;
