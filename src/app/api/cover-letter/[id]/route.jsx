import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
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
  const id = parseInt(params.id);
  const getCoverLetterById = await prisma.coverLetter.findUnique({
    where: {
      id: id,
      user_id: user_id,
    },
  });

  if (getCoverLetterById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  return NextResponse.json({
    message: "Resume retrive successfully",
    status: 200,
    payload: getCoverLetterById,
    date: new Date().toISOString(),
  });
};

export const PUT = async (req, { params }) => {
  const id = parseInt(params.id);
  const data = await req.json();

  const getCoverLetterById = await prisma.coverLetter.findUnique({
    where: {
      id: id,
    },
  });
  if (getCoverLetterById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }

  const session = await getServerSession(authOptions);

  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;
  const updatedCoverLetter = await prisma.coverLetter.update({
    where: {
      id: id,
    },
    data: {
      title: "Cover Letter",
      slug: "Cover Letter for professional carrer",
      user_id: user_id,
      data: data.data,
    },
  });

  return NextResponse.json({
    message: "Cover Letter updated successfully",
    status: 200,
    payload: updatedCoverLetter,
    date: new Date().toISOString(),
  });
};

export const DELETE = async (request, { params }) => {
  const id = parseInt(params.id);

  const getCoverLetterById = await prisma.coverLetter.findUnique({
    where: {
      id: id,
    },
  });

  if (getCoverLetterById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  const data = await prisma.coverLetter.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    message: "Cover Letter succesfully removed",
    date: new Date().toISOString(),
    status: 200,
    payload: data,
  });
};
