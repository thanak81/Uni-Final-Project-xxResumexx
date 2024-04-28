import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// export const GET = async (request,{params}) => {

// }

export const GET= async (request,{params})=> {
    const id = parseInt(params.id)
    const getResumeById = await prisma.resume.findUnique({
        where: {
            id: id
        }
    })

    if(getResumeById === null){
        return NextResponse.json({
            message: "ID NOT FOUND",
            status: 200,
            date: new Date().toISOString()
        })
    }

    return NextResponse.json({
        message: "Resume updated successfully",
        status: 200,
        payload: getResumeById,
        date: new Date().toISOString()
    })
}


export const PUT = async (request,{params})=> {
    const id = parseInt(params.id)
    const data = await request.json();

    const getResumeById = await prisma.resume.findUnique({
        where: {
            id: id
        }
    })


    if(getResumeById === null){
        return NextResponse.json({
            message: "ID NOT FOUND",
            status: 200,
            date: new Date().toISOString()
        })
    }

    const updateResume = await prisma.resume.update({
        where: {
            id: id
        },
        data: {
            data: {
                data
            }
        }
    })

    return NextResponse.json({
        message: "Resume updated successfully",
        status: 200,
        payload: updateResume,
        date: new Date().toISOString()
    })
}


export const DELETE = async (request,{params})=> {
    const id = parseInt(params.id);

    const getResumeById = await prisma.resume.findUnique({
        where: {
            id:id
        }
    })
    if(getResumeById === null){
        return NextResponse.json({
            message: "ID NOT FOUND",
            status: 200,
            date: new Date().toISOString()
        })
    }
    const data = await prisma.resume.delete({
        where: {
            id: id
        }
    })


    return NextResponse.json({
        message : "Resume succesfully removed",
        date: new Date().toISOString(),
        status: 200,
        payload: data
    })

}