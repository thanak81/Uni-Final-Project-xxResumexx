import { NextResponse } from "next/server";

export async function GET(){
    const apiUrl = process.env.API_URL;
    const data = await fetch(`${apiUrl}`,{
        cache: "no-store"
    });
    const response = await data.json();
    console.log(response)
    return NextResponse.json({
        status: 200,
        payload: response,
        message: "Resume Data is fetch"
    })
}