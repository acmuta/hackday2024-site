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
    await UserProfile.updateOne({email: user.email}, {team: "None"})
    await Team.updateOne({name: teamName}, {$pull: {members: {email: user.email}}})
    // if there members is an empty array we delete the team
    const tempt = await Team.findOne({name: teamName})
    if (tempt.members.length === 0) {
        await Team.deleteOne({name:teamName})
    }

    

     return new NextResponse("User joined successfully", {status: 201})

}
catch (error) {


    return new NextResponse("failed to join",{status: 500})
}
}




