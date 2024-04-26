const prisma = new PrismaClient();

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// export async function GET(){
//     const data = await fetch("http://localhost:3001/cv/getCV");
//     const response = await data.json();
//     console.log(response)
//     return NextResponse.json({
//         status: 200,
//         payload: response,
//         message: "Resume Data is fetch"
//     })
// }

export async function POST(request){
    const resumeData = await request.json();
    const data = await prisma.resume.create({
        data: {
            data: resumeData
        }
    })
    return NextResponse.json({
        message: "Resume successfully created!",
        payload : data,
        status: 200,
        date : new Date().toISOString()
    })
}
export async function GET(){
    const resumeDate = await prisma.resume.findMany();

    return NextResponse.json({
        message: "Resume successfully retrieve",
        payload : resumeDate,
        status : 200,
        date: new Date().toISOString()
    })
}