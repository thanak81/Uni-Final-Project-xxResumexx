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

function CardComp({ data, index, mutation }) {
  const date = new Date(data.createdAt);
  const formattedDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <Card radius="sm" className=" " isHoverable>
      <div className="relative">
        <div className="absolute bottom-2 right-2 cursor-pointer">
          {/* <Dialog/> */}
          <Dialog
            formattedDate={formattedDate}
            data={data}
            mutation={mutation}
          />
        </div>
        <div className="w-[15rem] px-4 py-2 bg-[#B8B8B4]">
          <Image
            src="/CV.png"
            className="object-cover"
            alt="Resume"
            width={2700}
            height={2000}
          />
        </div>
      </div>
      <CardBody className="">
        <small>Resume {data.id}</small>
        <p className="font-bold text-blue-500">{data.title}</p>
        <small>{formattedDate}</small>
        {/* <small>{data.updatedAt}</small>  */}
        <Divider className="my-4" />
        <div className="flex justify-between items-center">
          <p className="text-sm">{data.slug}</p>
          <Button color="">
            <Link
              href={`/main/resume/edit/${data.id}`}
              className="text-white text-sm"
            >
              Edit
            </Link>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardComp;
