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
import { Button } from "@radix-ui/themes";
import Dialog from "@/app/components/Dialog";

function CardCompCover({ data, index, mutation }) {
  const date = new Date(data.createAt)
const formattedDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

  return (
    <Card radius="sm" className=" " isHoverable>
      <div className="relative">
        <div className="absolute bottom-2 right-2 cursor-pointer">
          {/* <Dialog/> */}
          <Dialog formattedDate={formattedDate} data={data} mutation={mutation} />
        </div>
        <Image
          src="/CV.png"
          className="object-cover"
          alt="Resume"
          width={270}
          height={200}
        />
      </div>
      <CardBody className="">
        <small>Cover Letter {data.id}</small>
        <p>Title: {data.title}</p>
         <small>{formattedDate}</small>
        {/* <small>{data.updatedAt}</small>  */}
        <Divider className="my-4" />
        <div className="flex justify-between items-center">
          <small className="w-[10rem]">{data.slug}</small>
          <Button color="">
            <Link href={`/main/cover-letter/edit/${data.id}`}  className="text-white text-sm">Edit</Link>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardCompCover;
