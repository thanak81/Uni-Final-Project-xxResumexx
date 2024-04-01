import { Card, CardHeader, CardBody, CardFooter,Divider,Link } from "@nextui-org/react";
import Image from "next/image";

import React from "react";

function CardComp({data}) {
    return (
        <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
     
          <div className="flex flex-col">
            <p className="text-md">{data.basics.name}</p>
            <p className="text-small text-default-500">{data.basics.email}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    )

}

export default CardComp;
