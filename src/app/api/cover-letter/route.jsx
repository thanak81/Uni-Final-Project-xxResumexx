import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const GET = async () => {
  const session = await getServerSession(authOptions);
  console.log("session id", session.user.id);
  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;
  if (!session) {
    return NextResponse.json({
      message: "You are unauthorize",
      status: 401,
      date: new Date().toISOString(),
    });
  }
  const getCover = await prisma.user.findUnique({
    where: {
      id: user_id,
    },

    include: {
      CoverLetter: true,
    },
  });
  if (getCover === null) {
    return NextResponse.json({
      message: "User id not found",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  return NextResponse.json({
    message: "Cover Letter Lists",
    status: 200,
    payload: {
      id: getCover.id,
      image: getCover.image,
      name: getCover.name,
      email: getCover.email,
      coverLetter: getCover.CoverLetter,
      createdAt: getCover.createdAt,
      updatedAt: getCover.updatedAt,
    },

    date: new Date().toISOString(),
  });
};

export const POST = async (request) => {
  const session = await getServerSession(authOptions);
  // const user_id = session.user.payload.id;
  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;
  const coverData = await request.json();
  const createCoverLetter = await prisma.coverLetter.create({
    data: {
      title: "Cover Letter",
      slug: "Cover letter for job finding",
      user_id: user_id,
      data: coverData.data,
    },
  });
  return NextResponse.json({
    message: "Cover Letter successfully created!",
    payload: createCoverLetter,
    status: 200,
    date: new Date().toISOString(),
  });
};
