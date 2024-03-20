import connectDB from "@/lib/mongodb/connectDB";
import Team from "@/lib/models/teams";
import { NextResponse } from 'next/server';


export async function POST(request: Request){
    try{
    await connectDB();
    const body = await request.json();
    const {name} = body;
    console.log("hehe")

    const teamList = await Team.findOne({name: name})

    // return new Response(JSON.stringify(teamList))

    return new NextResponse(JSON.stringify(teamList.members),{status: 200 })
}
catch (error) {
    // return new Response("failed to get teams")
    return new NextResponse("failed to get teams",{status: 500})
}
}




