import React from "react";
import Personal from "./Personal";
import { Flex, Separator, Text } from "@radix-ui/themes";

function Form() {
  return (
    <div>
      <Text size="2">
        <Flex gap="3" align="center" className="">
          <div className="w-5/6">
            <Personal />
          </div>
          <Separator orientation="vertical" />
          <div>
            magni ad totam cum illo nulla? Mollitia dignissimos, ipsa ex
            similique quos labore ad doloremque veritatis, deserunt, dolorem
            pariatur error magni quo est. Officia laborum at laudantium.
            Molestias labore perspiciatis qui pariatur cum quo nam eveniet?
          </div>
          <Separator orientation="vertical" />
        </Flex>
      </Text>
    </div>
  );
}

export default Form;
