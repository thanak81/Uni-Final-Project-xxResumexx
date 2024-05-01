import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// export const GET = async (request,{params}) => {

// }

export const GET = async (request, { params }) => {
  const id = parseInt(params.id);
  const getResumeById = await prisma.resume.findUnique({
    where: {
      id: id,
    },
  });

  if (getResumeById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    message: "Resume retrive successfully",
    status: 200,
    payload: getResumeById,
    date: new Date().toISOString(),
  });
};

export const PUT = async (request, { params }) => {
    console.log("params", params)
  const id = parseInt(params.id);
  console.log("routeId", params.id)
  const data = await request.json();

  const getResumeById = await prisma.resume.findUnique({
    where: {
      id: id
    },
  });
  console.log("updated data json", data)
  if (getResumeById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  const session = await getServerSession(authOptions);
//   if (!session) {
//     return resp.status(401).json({ error: "Not authenticated" });
//   }
  const user_id = session.user.payload.id;

  const updateResume = await prisma.resume.update({
    where: {
      id: 105,
    },
    data: {
        title: "resume1",
        // slug: resumeData.resumeInfo.slug,
        slug: "testing resume",
        // need to make this dynamic
        user_id: user_id,
        data: data.data,
    },
  });

  console.log("updateddata", updateResume)

  return NextResponse.json({
    message: "Resume updated successfully",
    status: 200,
    payload: updateResume,
    date: new Date().toISOString(),
  });
};

export const DELETE = async (request, { params }) => {
  const id = parseInt(params.id);

  const getResumeById = await prisma.resume.findUnique({
    where: {
      id: id,
    },
  });
  if (getResumeById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  const data = await prisma.resume.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    message: "Resume succesfully removed",
    date: new Date().toISOString(),
    status: 200,
    payload: data,
  });
};
