import connectDB from "@/lib/mongodb/connectDB";
import Team from "@/lib/models/teams";
import { NextResponse } from 'next/server';


export async function GET(request: Request){
    try{
    await connectDB();
    console.log("get teams")

    const teamList = await Team.find({})

    // return new Response(JSON.stringify(teamList)) 
    return new NextResponse(JSON.stringify(teamList),{status: 200 })
}
catch (error) {
    // return new Response("failed to get teams")
    return new NextResponse("failed to get teams",{status: 500})
}
}




