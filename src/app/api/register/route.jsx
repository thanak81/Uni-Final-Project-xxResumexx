import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
const prisma = new PrismaClient();

export const POST = async (req)=>{
    const body = await req.json();
    const {name , email , password} = body;

    if(!name || !email || !password){
        return new NextResponse("Missing name, email , or password", {status: 400})
    }

    const exist = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(exist){
        return NextResponse.json({message:"User already exist",status: 400},{status: 400})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const createUser = await prisma.user.create({
    data:{
    name,
    email,
    hashedPassword
    }
})

    return NextResponse.json({
        message: "User successfully register",
        payload : createUser,
        date : new Date().toISOString()
    })
}


// export const PUT = async (request)=> {
//     const session = await getServerSession(request);
//     console.log("session", session)
//     console.log("request", await request.json())
//     if(!session){
//         return NextResponse.json({
//             message: "You are unauthenticated",
//             date: new Date().toISOString(),
//             status: 401
//           })
//     }
//     const email = session.user.payload.email;
//     const userRequest = await request.json();
//     const updatedData = await prisma.user.update({
//       where: {
//         email : email
//       },
//       data: {
//         name: userRequest.name,
//         email : userRequest.email
//       },
//     })

//     return NextResponse.json({
//       message: "User updated successfully",
//       payload: updatedData,
//       date: new Date().toISOString(),
//       status: 200
//     })
//   }