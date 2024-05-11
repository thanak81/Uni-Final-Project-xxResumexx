import DownloadIcon from "@/app/components/icons/DownloadIcon";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { Divider, Input, ScrollShadow, Slider } from "@nextui-org/react";
import TemplateSwitch from "../ui/TemplateSwitch";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import SubmitDialogComp from "./SubmitDialogComp";

function ProgressCard({
  onSubmit,
  printResume,
  margin,
  setMargin,
  line,
  setLine
}) {

  return (
    <div className="overflow-y-auto h-full w-[18rem]">
      <Flex direction="column" gap="3" maxWidth="400px" className="h-screen">
        <Card variant="surface">
          <Text as="div" size="2" weight="bold">
            Resume Rating
          </Text>
          <Text as="div" color="gray" size="2">
            Start building your next project in minutes
          </Text>
        </Card>
        {/* <Button onClick={onSubmit}>
          <DownloadIcon /> Submit Resume
        </Button> */}
        <SubmitDialogComp onSubmit={onSubmit} printResume={printResume} />
        <Slider
          label="Bottom Padding"
          step={5}
          value={margin}
          maxValue={20}
          onChange={setMargin}
          className="max-w-md"
        />
        <Slider
          label="Line Height"
          step={10}
          value={line}
          maxValue={50}
          onChange={setLine}
          className="max-w-md"
        />
        {/* <Divider />
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
          </div>
     
        </ScrollShadow> */}
      </Flex>
    </div>
  );
}

export default ProgressCard;
