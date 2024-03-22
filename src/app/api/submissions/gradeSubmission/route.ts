import {NextResponse} from "next/server";
import connectDB from "@/lib/mongodb/connectDB";
import Submission from "@/lib/models/submission";

export async function POST(request: Request){
    await connectDB();
    const body = await request.json();
    const {category, teamName, score} = body
    const grade = Number(score)
    try{
        const submission = await Submission.findOne({ category: category, teamName: teamName})

    if (submission.reviewCount >=5 ){


        return new NextResponse("Submission has already been reviewed 5 times", {status: 202})
    }
    else{
        await Submission.updateOne({category: category, teamName: teamName}, {reviewCount: submission.reviewCount + 1, score: [...submission.score, grade]}) 
        return new NextResponse( "Submission graded", {status: 200}) 
    }
    

    }catch (error){
        return new NextResponse("failed to grade submission", {status: 500})
    }
}