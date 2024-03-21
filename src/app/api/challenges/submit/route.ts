import connectDB from "@/lib/mongodb/connectDB";
import Submission from "@/lib/models/submission";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
    await connectDB();
    const body = await request.json();
    const {category, teamName, url} = body;
    const existingSubmission = await Submission.findOne({teamName: teamName, category: category})
    if (existingSubmission) {
        await Submission.updateOne({teamName: teamName, category: category}, {url: url})
        return new NextResponse("Submission updated", {status: 200})
    }
    const newSubmission = new Submission({
        category: category.toLowerCase(),
        teamName: teamName,
        url: url
    })
    await newSubmission.save()
    return new NextResponse("Submission successful", {status: 200})
}
catch (error) {
    return new NextResponse("failed to submit",{status: 500})
}
}