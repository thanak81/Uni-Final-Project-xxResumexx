import DownloadIcon from "@/app/components/icons/DownloadIcon";
import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useEffect, useMemo, useState } from "react";
import { Divider, Input, ScrollShadow, Slider } from "@nextui-org/react";
import TemplateSwitch from "../ui/TemplateSwitch";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import SubmitDialogComp from "./SubmitDialogComp";
import { useGap, useLineHeight, usePadding } from "../state/GlobalState";
import Template1Styling from "./templatess/CVTemplate/AllTemplates/TemplateStyling/Template1Styling";
import Template2Styling from "./templatess/CVTemplate/AllTemplates/TemplateStyling/Template2Styling";
import clsx from "clsx";

function ProgressCard({ onSubmit, printResume, styleSwitch }) {

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
        <Divider className="" />
        <ScrollShadow
        hideScrollBar
          className="w-full h-[44%] pb-2  flex flex-col gap-2 overflow-x-hidden"
          size={300}
          isEnabled={false}
        >
          <div className="">
            <Heading as="h4" color="green">
              {styleSwitch.title}
            </Heading>
            <div className="">
              {styleSwitch.styling}
            </div>
          </div>
        </ScrollShadow>
      </Flex>
    </div>
  );
}

export default ProgressCard;
