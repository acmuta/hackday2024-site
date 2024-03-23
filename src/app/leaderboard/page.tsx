"use client";
import { set } from "mongoose";
import Navbar from "../components/AfterLoginNavBar";
import { iceland, inter } from "../components/ui/fonts";
import { useEffect, useState } from "react";
interface Rankteam {
  teamName: string;
  totalScore: number;
  cyberScore: number;
  realEstateScore: number;
  EduScore: number;
  AIScore: number;
  submissionURL: IURL;
}
interface RankList {
  rankList: Array<Rankteam>;
}
interface IURL {
  cyberURL: string;
  realEstateURL: string;
  EduURL: string;
  AIURL: string;
}

const Dropdown = ({ index, toggleDropdown, isOpen, submissions }: any) => {
  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        onClick={() => toggleDropdown(index)}
        className="text-white rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:scale-110 transition ease-in-out duration-100"
        type="button"
      >
        Links
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen === index && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 mt-2 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              {submissions.cyberURL && (
                <a
                  href={submissions.cyberURL}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Cyber Security
                </a>
              )}
            </li>
            <li>
              {submissions.realEstateURL && (
                <a
                  href={submissions.realEstateURL}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Real Estate
                </a>
              )}
            </li>
            <li>
              {submissions.EduURL && (
                <a
                  href={submissions.EduURL}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Education
                </a>
              )}
            </li>
            <li>
              {submissions.AIURL && (
                <a
                  href={submissions.AIURL}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  AI
                </a>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
const TableBody = ({ rankList }: RankList) => {
  const [isOpen, setIsOpen] = useState(-1);

  const toggleDropdown = (index: any) => {
    console.log(index);
    setIsOpen(isOpen === index ? -1 : index);
  };
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
          <td className="px-6 py-4">
            <Dropdown
              index={index}
              toggleDropdown={toggleDropdown}
              isOpen={isOpen}
              key={index}
              submissions={team.submissionURL}
            ></Dropdown>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const DynamicTable = ({ rankList }: RankList) => {
  return (
    <div className="w-4/5">
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
              <th scope="col" className="px-6 py-3">
                Submissions
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
