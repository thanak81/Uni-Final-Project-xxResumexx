import DownloadIcon from "@/app/components/icons/DownloadIcon";
import {
  Button,
  Card,
  Flex,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { Divider } from "@nextui-org/react";
import TemplateSwitch from "../ui/TemplateSwitch";

function ProgressCard({onSubmit,data,handleTemplate}) {
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
      <Card>
        <Text>Choose Templates</Text>
      </Card>
      <Card>
        <Card>
          <Text>
            Template 1
          </Text>
          <div>
            <TemplateSwitch data={data} handleTemplate={handleTemplate}/>
          </div>
        </Card>
      </Card>
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
