"use client";
import { set } from "mongoose";
import { iceland } from "./ui/fonts";
import { useState } from "react";
interface ScoreSubmissionProps {
  category: string;
  teamName: string;
  url: string;
  score: number;
  revieweCount: number;
}

export default function ScoreSubmission(
  { submission }: any,
  { order }: number | undefined
) {
  const [score, setScore] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isNaN(Number(score))) {
      alert("Score must be a number");
      return;
    }
    const data = {
      category: submission.category,
      teamName: submission.teamName,
      score,
    };
    const res = await fetch("/api/submissions/gradeSubmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      alert("Score submitted successfully");
      window.location.reload();
    } else if (res.status === 202) {
      alert(
        "This submission has already had enough reviews, grade another one please"
      );
      setScore("");
    } else if (res.status === 500) {
      alert("Failed to submit score");
      setScore("");
    } else {
    }
  };
  return (
    <div className="flex flex-row p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex-grow ">
        <h1
          className={`${iceland.className} text-white md: text-3xl text-md md:max-w-[600px] max-w-[480px]`}
        >
          {order}
          <span
            className={`${iceland.className} text-white md:text-xl text-sm break-all `}
          >
            <a href={submission.url} target="_blank">
              {submission.url}
            </a>
          </span>
        </h1>
      </div>
      <div className="relative md:mr-1 mr-0 flex flex-col items-end ">
        <form onSubmit={handleSubmit}>
          <label
            className={`${iceland.className} text-white md:text-xl text-md mb-2`}
          >
            Score
          </label>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className={`${iceland.className} bg-white bg-opacity-20 rounded-md p-2 mb-2 w-10 md:ml-2 ml-0 `}
          />
          <button
            type="submit"
            className={`${iceland.className} text-white bg-opacity-20 rounded-md p-2 hover:bg-opacity-30 transition duration-200`}
          >
            <svg
              className="w-4 h-4 transform rotate-45 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
