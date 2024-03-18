"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { iceland } from "./ui/fonts";
interface Member {
  email: string;
  picture: string;
}
interface TeamProps {
  name: string;
  members: Array<Member>;
}
interface Team {
  team: TeamProps;
}
export default function Team({ team }: Team) {
  const [isMember, setIsMember] = useState(true);

  return (
    <div className="flex flex-col w-60 h-80 border-solid border-white border-2 bg-white bg-opacity-20 justify-center items-center rounded-md  hover:bg-opacity-25 transition ease-in-out duration-100 shadow-md ">
      <h1 className={`${iceland.className}  text-white text-3xl`}>
        {team.name}
      </h1>
      <div className="flex flex-col overflow-y-auto overflow-x-auto w-52 justify-start items-start h-56 gap-y-2.5 p-2.5 ">
        {team.members.map((member, index) => {
          return (
            <div className="flex flex-row gap-x-5  " key={index}>
              <img
                src={member.picture}
                alt="image"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className={`${iceland.className}  text-white text-xl`}>
                {member.email}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center items-center gap-x-20 ">
        {isMember ? (
          <button className=" flex justify-center items-center bg-white cursor-pointer rounded-full w-20 h-10  hover:scale-105 transition ease-in-out duration-100 ">
            <p className={`${iceland.className}  text-black text-lg`}>Join</p>
          </button>
        ) : (
          <button className={`${iceland.className}  text-black text-lg`}>
            Join
          </button>
        )}
        {isMember ? (
          <button
            className={`${iceland.className}  text-black text-lg  hover:scale-105 transition ease-in-out duration-100`}
          >
            Edit
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
