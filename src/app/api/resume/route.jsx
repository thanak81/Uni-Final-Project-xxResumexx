import { NextResponse } from "next/server";

export async function GET(){
    const data = await fetch("http://localhost:3001/cv/getCV");
    const response = await data.json();
    console.log(response)
    return NextResponse.json({
        status: 200,
        payload: response,
        message: "Resume Data is fetch"
    })
}