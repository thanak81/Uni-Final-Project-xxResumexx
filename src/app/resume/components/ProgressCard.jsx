import DownloadIcon from "@/app/components/icons/DownloadIcon";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";
import React from "react";
import Hidden from "./Hidden";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

function ProgressCard() {
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
      <Button>
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
