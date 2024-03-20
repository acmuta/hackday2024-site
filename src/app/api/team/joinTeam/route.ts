import connectDB from "@/lib/mongodb/connectDB";
import Team from "@/lib/models/teams";
import UserProfile from "@/lib/models/userProfile";
import { NextResponse } from "next/server";


export async function POST(request: Request){
    try{
    await connectDB();
    const body = await request.json();
    const {teamName, user} = body;
    user.team = teamName
    
    await UserProfile.updateOne({email: user.email}, {team: teamName})
    
    await Team.updateOne({name: teamName}, {$push: {members: user}})

    //  return new NextResponse("User joined successfully", {status: 201})
    return NextResponse.redirect(new URL("/team", request.url))

}
catch (error) {


return new NextResponse("failed to join",{status: 500})

}
}




