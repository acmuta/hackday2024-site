"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { iceland } from "./ui/fonts";
import UserInterface from "@/lib/utils/interfaces/userInterface";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Member = UserInterface;
interface TeamProps {
  name: string;
  members: Array<Member>;
}
interface Team {
  team: TeamProps;
}
export default function Team({ team }: Team) {
  const { data: session } = useSession();
  const [isMember, setIsMember] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      //@ts-ignore
      if (session.user?.team === team.name) {
        setIsMember(true);
      } else {
        setIsMember(false);
      }
    }
    //@ts-ignore
  }, [session]);
  const handleLeaveTeamClick = async () => {
    const teamName = team.name;
    const user = session?.user;

    const data = { teamName, user };
    fetch("/api/team/leaveTeam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        console.log("User left team successfully");
        setIsMember(false);
        window.location.reload();
      } else {
        console.log("failed to leave team");
      }
    });
  };
  const handleJoinClick = async () => {
    const teamName = team.name;
    const user = session?.user;
    const data = { teamName, user };
    fetch("/api/team/joinTeam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        console.log("User joined team successfully");
        setIsMember(true);
        window.location.reload();
      } else {
        console.log("failed to join team");
      }
    });
  };

  return (
    //@ts-ignore
    team.members.length ? (
      <div className="flex flex-col w-60 h-80 border-solid border-white border-2 bg-white bg-opacity-20 justify-center items-center rounded-md  hover:bg-opacity-25 transition ease-in-out duration-100 shadow-md ">
        <h1
          className={`${iceland.className}  text-white break-all truncate text-3xl w-56 h-8 text-center`}
        >
          {team.name}
        </h1>
        <div className="flex flex-col overflow-y-auto overflow-x-auto w-52 justify-start items-start h-56 gap-y-2.5 p-2.5 ">
          {team.members.map((member, index) => {
            return (
              <div className="flex flex-row gap-x-5  " key={index}>
                <img
                  src={
                    member.image
                      ? member.image
                      : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                  }
                  alt="image"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p
                  className={`${iceland.className}  text-white truncate text-xl`}
                >
                  {member.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center gap-x-20 ">
          {isMember ? (
            <button
              className=" flex justify-center items-center bg-white cursor-pointer rounded-full w-20 h-10  hover:scale-105 transition ease-in-out duration-100 "
              onClick={handleLeaveTeamClick}
            >
              <p className={`${iceland.className}  text-black text-lg`}>
                Leave
              </p>
            </button>
          ) : // @ts-ignore
          session?.user.team === "None" ? (
            <button
              className=" flex justify-center items-center bg-white cursor-pointer rounded-full w-20 h-10  hover:scale-105 transition ease-in-out duration-100 "
              onClick={handleJoinClick}
            >
              <p className={`${iceland.className}  text-black text-lg`}>Join</p>
            </button>
          ) : (
            <></>
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
    ) : (
      <></>
    )
  );
}
