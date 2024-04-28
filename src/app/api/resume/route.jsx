const prisma = new PrismaClient();

import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
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

export async function POST(request,res){
    const session = await getSession({request})
    // if (!session) {
    //     return res.status(401).json({ error: 'Not authenticated' });
    //   }

    console.log(session)
    const resumeData = await request.json();
    console.log("resume data",resumeData)
    console.log("resume info",resumeData.resumeInfo)
    const data = await prisma.resume.create({
        data: {
            title:resumeData.resumeInfo.title,
            slug: resumeData.resumeInfo.slug,
            user_id: "clvgq2i140002s0gtgfydhfch",
            data: resumeData.data
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
    const resumeData = await prisma.resume.findMany();

    return NextResponse.json({
        message: "Resume successfully retrieve",
        payload : resumeData,
        status : 200,
        date: new Date().toISOString()
    })
}