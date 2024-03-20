"use client";
import TeamNavBar from "../components/AfterLoginNavBar";
import Team from "../components/Team";
import { iceland } from "../components/ui/fonts";
import Spinner from "../components/Spinner";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import UserInterface from "@/lib/utils/interfaces/userInterface";
import { redirect } from "next/navigation";

// const teamList = [
//   {
//     name: "Team 1",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 2",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 3",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 4",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 5",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 6",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 7",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 8",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 9",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 10",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
//   {
//     name: "Team 11",
//     members: [
//       {
//         email: "nhitran26197",
//         picture:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
//       },
//     ],
//   },
// ];
interface Team {
  name: string;
  user: UserInterface;
}

export default function TeamPage() {
  const { data: session } = useSession();
  const [teamList, setTeamList] = useState([]);
  const [addingTeam, setAddingTeam] = useState(true);
  const [loading, setLoading] = useState(true);

  if (!session) {
    redirect("/");
  }
  const handleOnClickAddTeam = () => {
    setAddingTeam(false);
  };
  const [teamName, setTeamName] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (session) {
      const user: UserInterface = {
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
        //@ts-ignore
        role: session.user?.role,
        //@ts-ignore
        provider: session.user?.provider,
        team: teamName,
      };

      const team: Team = {
        name: teamName,
        user: user,
      };
      try {
        const res = await fetch("/api/team/addTeam", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(team),
        });
        if (res.ok) {
          console.log("team added successfully");

          setTeamName("");
          setAddingTeam(true);
          window.location.reload();
        } else {
          console.log("failed to add team");
          if (res.status === 400) {
            alert("You're already in a team");
          } else if (res.status === 500) {
            alert("Team already exists, please try another name");
          } else {
            alert("Failed to add team");
          }

          setTeamName("");
        }
      } catch (error: any) {
        console.log("error", error);
      }
    }
  };
  const handleGoBack = () => {
    setAddingTeam(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/team/getTeams")
        .then((res) => res.json())
        .then((data) => setTeamList(data))
        .then(() => setLoading(false));
    };
    fetchData();
    return () => {
      console.log("unmount");
    };
  }, [addingTeam]);

  return (
    <div className="h-full static">
      <TeamNavBar></TeamNavBar>

      {addingTeam ? (
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-row flex-wrap  overflow-y-auto justify-center items-center gap-x-10 gap-y-10 md:px-44 px-20 md:pt-10 md:max-h-[720px] max-h-[400px]">
              {teamList.length ? (
                teamList.map((team, index) => (
                  <Team team={team} key={index}></Team>
                ))
              ) : (
                <h1 className={`${iceland.className} text-white text-3xl `}>
                  No team added yet, you're the first one
                </h1>
              )}
            </div>
          )}

          <div
            className={`${iceland.className} w-full md:text-4xl text-2xl flex flex-row items-center justify-center mt-10 absolute bottom-10`}
          >
            <button
              className="cursor-pointer rounded-md p-5 hover:scale-105 hover:bg-opacity-35 hover:text-white transition ease-in-out duration-200 text-3xl md:w-56 w-40 py-2 bg-white  text-black justify-center border-solid border-2s"
              onClick={handleOnClickAddTeam}
            >
              <div className="relative text-29xl leading-[38px] font-icelandtext-left">
                Add Team
              </div>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed top-0 left-0 m-4">
            <button
              className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
              onClick={handleGoBack}
            >
              {/* Replace this with your desired icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <form onSubmit={handleOnSubmit} className=" ">
              <div className="md:h-[720px] h-[400px] flex flex-row justify-center items-center">
                <label
                  htmlFor="teamName"
                  className={`${iceland.className}  text-white md:text-6xl  text-3xl`}
                >
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamNameInput"
                  name="teamName"
                  value={teamName}
                  onChange={handleInputChange}
                  className={`md:w-96 w-48 md:h-14 h-10 rounded-md p-5 bg-white text-black border-solid border-2s border-white bg-opacity-30  md:text-2xl text-md md:ml-5 ml-1 ${iceland.className}  text-white md:text-3xl  text-md`}
                  placeholder="Enter your team name"
                  required
                />
              </div>

              <div
                className={`${iceland.className} w-full md:text-4xl text-xl flex flex-row items-center justify-center mt-10 absolute bottom-10`}
              >
                <button
                  className="cursor-pointer rounded-md p-5 hover:scale-105 hover:bg-opacity-35 hover:text-white transition ease-in-out duration-200 text-3xl md:w-56  w-40 py-2 bg-white  text-black justify-center border-solid border-2s"
                  type="submit"
                >
                  <div className="relative text-29xl leading-[38px] font-icelandtext-left">
                    Add Team
                  </div>
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
