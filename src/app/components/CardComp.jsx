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

function CardComp({ data, index , mutation}) {
  console.log("cardCompss",data)
  return (
    <Card radius="sm" className=" " isHoverable>
      <div className="relative">
        <div className="absolute bottom-2 right-2 cursor-pointer">
          {/* <Dialog/> */}
          <Dialog data={data} mutation={mutation}/>
        </div>
        <Image src="/CV.png" className="object-cover" alt="Resume" width={270} height={200}/>
      </div>
      <CardBody className="">
        <small>Resume {`${index + 1}`}</small>
        <p>Title: {data.title}</p>
        {/* <small>{data.createdAt}</small>
        <small>{data.updatedAt}</small> */}
        <Divider className="my-4" />
        <div className="flex justify-between items-center">
          <p>{data.slug}</p>
          <Button color="">Edit</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardComp;
