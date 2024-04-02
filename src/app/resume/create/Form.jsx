"use client"
import React from "react";
import Personal from "./Personal";
import { Flex} from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { useStore } from "../state/GlobalState";
function Form() {

  const value = useStore((state)=> state.value)
  const setValue = useStore((state)=> state.setValue)

  return (
    <div className="overflow-y-hidden">
      <Flex gap="3" align="center" justify="center" className="">
        <ScrollShadow
          hideScrollBar
          size={200}
          className="  w-[1095px] flex flex-col gap-2"
        >
              <Personal value={value} setValue={setValue}/>
        </ScrollShadow>
      </Flex>
    </div>
  );
}

export default Form;
