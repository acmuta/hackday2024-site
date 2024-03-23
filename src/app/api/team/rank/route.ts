

import connectDB from "@/lib/mongodb/connectDB";
import Team from "@/lib/models/teams";
import { NextResponse } from 'next/server';
import Submission from "@/lib/models/submission";

interface RankList {
  teamName: string,
  totalScore: number, 
  cyberScore: number, 
  realEstateScore: number, 
  EduScore: number, 
  AIScore: number,
  submissionURL: IURL,
}
interface ISubmission {
  category: string, score: Array<number>,
}
interface IURL{
  cyberURL: string,
  realEstateURL: string,
  EduURL: string,
  AIURL: string,
}
export async function GET(request: Request) {
  try {
    await connectDB();
    const teamList = await Team.find({}).select('name -_id');
    const rankList: Array<RankList> = [];

    const getTeamRank = async (team: any) => {
      const teamName = team.name;
      const submissions = await Submission.find({ teamName: team.name }).select('category score url -_id');
      console.log(submissions)
      let totalScore = 0;
      let cyberScore = 0;
      let realEstateScore = 0;
      let EduScore = 0;
      let AIScore = 0;
      let submissionURL ={
        cyberURL: "",
        realEstateURL: "",
        EduURL: "",
        AIURL: "",
      }

      for (const submission of submissions) {
        

        if (submission.category === "cyber security") {
          submissionURL.cyberURL = submission.url;
          cyberScore = Math.round(submission.score.reduce((a: any, b: any) => a + b, 0) / submission.score.length);
          totalScore += cyberScore;
        } else if (submission.category === "real estate") {
          submissionURL.realEstateURL = submission.url;
          realEstateScore = Math.round(submission.score.reduce((a: any, b: any) => a + b, 0) / submission.score.length);
          totalScore += realEstateScore;
        } else if (submission.category === "education") {
          submissionURL.EduURL = submission.url;
          EduScore = Math.round(submission.score.reduce((a: any, b: any) => a + b, 0) / submission.score.length);
          totalScore += EduScore;
        } else if (submission.category === "artificial intelligence") {
          submissionURL.AIURL = submission.url;
          AIScore = Math.round(submission.score.reduce((a: any, b: any) => a + b, 0) / submission.score.length);
          totalScore += AIScore;
        }
      }

      rankList.push({
        teamName: teamName,
        totalScore: totalScore,
        cyberScore: cyberScore,
        realEstateScore: realEstateScore,
        EduScore: EduScore,
        AIScore: AIScore,
        submissionURL: submissionURL
      });
    };

    const promises = teamList.map(getTeamRank);
    await Promise.all(promises);

    rankList.sort((a, b) => b.totalScore - a.totalScore);

    return new NextResponse(JSON.stringify(rankList), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to get teams", { status: 500 });
  }
}


