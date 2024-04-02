import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

import React from "react";
import Separators from "./Separator";
import { Button } from "@radix-ui/themes";
import InfoIcon from "./icons/InfoIcon";
import Dialog from "./Dialog";

function CardComp({ data, index }) {
  return (
    <Card radius="sm" className=" " isHoverable>
      <div className="relative">
        <div className="absolute bottom-2 right-2 cursor-pointer">
          {/* <Dialog/> */}
          <Dialog data={data}/>
        </div>
        <Image src="/CV.png" className="object-cover" alt="Resume" width={270} height={200}/>
      </div>
      <CardBody className="">
        <small>Resume {`${index + 1}`}</small>
        <p>{data.basics.name}</p>
        <small>{data.basics.summary}</small>
        <Divider className="my-4" />
        <div className="flex justify-between items-center">
          <p>{data.basics.name}</p>
          <Button color="">Edit</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardComp;
