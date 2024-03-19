import TeamNavBar from "../components/AfterLoginNavBar";
import Team from "../components/Team";
import Link from "next/link";
import { iceland } from "../components/ui/fonts";

const teamList = [
  {
    name: "Team 1",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 2",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 3",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 4",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 5",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 6",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 7",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 8",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 9",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 10",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
  {
    name: "Team 11",
    members: [
      {
        email: "nhitran26197",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU",
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <div>
      <TeamNavBar></TeamNavBar>

      <div className="flex flex-row flex-wrap max-w-full overflow-y-auto justify-start items-center gap-x-10 gap-y-10 md:px-44 px-20 md:pt-10 md:max-h-[720px] max-h-[400px]">
        {teamList.map((team, index) => (
          <Team team={team} key={index}></Team>
        ))}
      </div>
      <div
        className={`${iceland.className} w-full md:text-4xl text-2xl flex flex-row items-center justify-center mt-10`}
      >
        <button className="cursor-pointer rounded-md p-5 hover:scale-105 hover:bg-opacity-35 hover:text-white transition ease-in-out duration-200 text-3xl md:w-56 w-24 py-2 bg-white  text-black justify-center border-solid border-2s">
          <div className="relative text-29xl leading-[38px] font-icelandtext-left">
            Add Team
          </div>
        </button>
      </div>
    </div>
  );
}
