"use client";
import React from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import Template1 from "./Template1";
import { usePathname } from "next/navigation";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import ZoomoutIcon from "@/app/components/ZoomoutIcon";
import ZoomInIcon from "@/app/components/ZoomInIcon";
import ResetIcon from "@/app/components/ResetIcon";
const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="flex gap-5">
      <ZoomoutIcon functions={() => zoomOut()} />
      <ZoomInIcon functions={() => zoomIn()} />
      <ResetIcon functions={() => resetTransform()} />
    </div>
  );
};
function TemplateContainer({ selectedTemplate, printRef }) {
  const pathName = usePathname();
  return (
    <Flex gap="3" className=" md:w-full h-full ">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`w-full ${
          pathName.startsWith("/main/resume/edit") ? "h-[80%]" : "h-[74%]"
        }  flex flex-col gap-2 p-4 bg-[#ECF0F5] overflow-y-scroll`}
      >
        <TransformWrapper
          wheel={{ disabled: true }}
          minScale={-5}
          maxScale={1}
          initialScale={1}
          // minPositionY={0}
          // minPositionX={100}
          // maxPositionX={null}
          // maxPositionY={10}
        >
          <Controls />

          <TransformComponent>
            {" "}
            <Template1
              selectedTemplate={selectedTemplate}
              printRef={printRef}
            />
          </TransformComponent>
        </TransformWrapper>
      </ScrollShadow>
    </Flex>
  );
}

export default TemplateContainer;
