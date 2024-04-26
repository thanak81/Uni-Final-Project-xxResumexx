import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
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
        return new NextResponse("User already exist",{status: 400})
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
