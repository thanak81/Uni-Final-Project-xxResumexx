import DownloadIcon from "@/app/components/icons/DownloadIcon";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { Divider, ScrollShadow } from "@nextui-org/react";
import TemplateSwitch from "../ui/TemplateSwitch";
import { ScrollArea } from "@radix-ui/react-scroll-area";

function ProgressCard({ onSubmit, data, handleTemplate }) {
  return (
    <div className="overflow-y-auto h-full">
      <Flex direction="column" gap="3" maxWidth="400px" className="h-screen">
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
        <ScrollShadow className="w-full h-[24.5rem] flex flex-col gap-2" size={300} isEnabled={false}>
          <div className="py-5">
          <Card>
            <Text>Choose Templates</Text>
          </Card>
          <Card>
            <Card>
              <div>
                <TemplateSwitch data={data} handleTemplate={handleTemplate} />
              </div>
            </Card>
          </Card>
          <Card>
            <Card>
              <div>
                <TemplateSwitch data={data} handleTemplate={handleTemplate} />
              </div>
            </Card>
          </Card>
          </div>
     
        </ScrollShadow>
      </Flex>
    </div>
  );
}

export default ProgressCard;
