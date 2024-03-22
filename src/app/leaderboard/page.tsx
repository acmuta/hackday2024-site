"use client";
import { set } from "mongoose";
import Navbar from "../components/AfterLoginNavBar";
import { iceland } from "../components/ui/fonts";
import { useEffect, useState } from "react";
interface Rankteam {
  teamName: string;
  totalScore: number;
  cyberScore: number;
  realEstateScore: number;
  EduScore: number;
  AIScore: number;
}
interface RankList {
  rankList: Array<Rankteam>;
}

const TableBody = ({ rankList }: RankList) => {
  return (
    <tbody>
      {rankList.map((team, index) => (
        <tr
          key={index}
          className={` ${
            index === 0
              ? "bg-white bg-opacity-20 hover:bg-opacity-30"
              : "bg-white border-b bg-opacity-5 hover:bg-opacity-10"
          }`}
        >
          <td className="px-6 py-4  ">{index + 1}</td>
          <td className="px-6 py-4">{team.teamName}</td>
          <td className="px-6 py-4">{team.totalScore}</td>
          <td className="px-6 py-4 ">{team.cyberScore}</td>
          <td className="px-6 py-4">{team.realEstateScore}</td>
          <td className="px-6 py-4">{team.EduScore}</td>
          <td className="px-6 py-4">{team.AIScore}</td>
        </tr>
      ))}
    </tbody>
  );
};

const DynamicTable = ({ rankList }: RankList) => {
  return (
    <div className="w-3/5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className=" w-full text-sm text-center rtl:text-right text-white ">
          {/* <thead className="text-xs text-gray-700 uppercase bg-white bg-opacity-30 dark:text-gray-400"> */}
          <thead
            className={`${iceland.className} text-black md: text-2xl text-md  bg-white `}
          >
            <tr>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Team Name
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              <th scope="col" className="px-6 py-3">
                Cyber security
              </th>
              <th scope="col" className="px-6 py-3">
                Real Estate
              </th>
              <th scope="col" className="px-6 py-3">
                Education
              </th>
              <th scope="col" className="px-6 py-3">
                AI
              </th>
            </tr>
          </thead>
          <TableBody rankList={rankList} />
        </table>
      </div>
    </div>
  );
};

// Render the DynamicTable component

export default function Leaderboard() {
  const [rankList, setRankList] = useState([]);
  useEffect(() => {
    fetch("/api/team/rank")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRankList(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flec-row justify-center items-center">
        <DynamicTable rankList={rankList} />
      </div>
    </div>
  );
}
