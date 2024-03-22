import {NextResponse} from "next/server";
import connectDB from "@/lib/mongodb/connectDB";
import Submission from "@/lib/models/submission";

export async function POST(request: Request){
    await connectDB();
    const body = await request.json();
    const {category} = body
    const submissions = await Submission.find({ category: category})
    if (submissions) {
        return new NextResponse(JSON.stringify(submissions), {status: 200})
    }
    else{
        return new NextResponse("No submission found", {status: 404})
    }


}