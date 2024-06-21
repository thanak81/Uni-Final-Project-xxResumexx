const prisma = new PrismaClient();

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// export async function GET(){
//     const data = await fetch("http://localhost:3001/cv/getCV");
//     const response = await data.json();
//     return NextResponse.json({
//         status: 200,
//         payload: response,
//         message: "Resume Data is fetch"
//     })
// }

export async function POST(request, res) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({
      message: "You are unauthorize",
      status: 401,
      date: new Date().toISOString(),
    });
  }

  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;

  const resumeData = await request.json();
  const data = await prisma.resume.create({
    data: {
      // title:resumeData.resumeInfo.title,
      title: resumeData.resumeInfo.title,
      slug: resumeData.resumeInfo.slug,
      // slug: "testing resume",
      // need to make this dynamic
      user_id: user_id,
      data: resumeData.data,
    },
  });
  return NextResponse.json({
    message: "Resume successfully created!",
    payload: data,
    status: 200,
    date: new Date().toISOString(),
  });
}
// export async function GET(){
//     const resumeData = await prisma.resume.findMany();

//     return NextResponse.json({
//         message: "Resume successfully retrieve",
//         payload : resumeData,
//         status : 200,
//         date: new Date().toISOString()
//     })
// }

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({
      message: "You are unauthorize",
      status: 401,
      date: new Date().toISOString(),
    });
  }

  // const user_id = session.user.payload.id;
  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;

  const getResume = await prisma.user.findUnique({
    where: {
      //need to make this dynamic
      id: user_id,
    },
    include: {
      Resume: true,
    },
  });

  //   if (!session) {
  //     return NextResponse.json({
  //       message: "You are unauthorize",
  //       status: 401,
  //       date: new Date().toISOString(),
  //     });
  //   }

  if (getResume === null) {
    return NextResponse.json({
      message: "User id not found",
      status: 200,
      date: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    message: "Resumes lists: ",
    status: 200,
    payload: {
      id: getResume.id,
      image: getResume.image,
      name: getResume.name,
      email: getResume.email,
      resume: getResume.Resume,
      createdAt: getResume.createdAt,
      updatedAt: getResume.updatedAt,
    },

    date: new Date().toISOString(),
  });
}
