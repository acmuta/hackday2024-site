import connectDB from "@/lib/mongodb/connectDB";
import Team from "@/lib/models/teams";
import UserProfile from "@/lib/models/userProfile";
import { NextResponse } from "next/server";


export async function POST(request: Request){
    try{
    await connectDB();
    const body = await request.json();
    const {name, user} = body;
    user.team = name
    const getTeam = await Team.findOne({name: name});
    if (getTeam) {

        return new NextResponse("Team already exists", {status: 400})
    }
    await UserProfile.updateOne({email: user.email}, {team: name})
    
    const team = await Team.create({
        name: name,
        members: [user],

    });

   await team.save();


     return new NextResponse("Team added successfully", {status: 201})

}
catch (error) {


    return new NextResponse("failed to add team",{status: 500})
}
}




