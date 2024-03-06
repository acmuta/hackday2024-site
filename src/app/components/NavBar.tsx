import Image from "next/image";
import { iceland } from "./ui/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row items-start justify-center max-w-full text-left text-xl text-white font-iceland p-5 m-0">
        <div className=" flex items-start max-w-full justify-between md:space-x-80 md:space-y-0 space-y-4 md:flex-row flex-col">
          <Link
            href="/"
            className="flex items-center justify-start py-0 space-x-3 z-0"
          >
            <Image
              src={"/hackutalogo-1@2x.png"}
              width={40}
              height={40}
              alt="logo"
            />
            <div className="flex flex-col justify-center leading-[19px] ">
              <p className={`m-0 ${iceland.className}`}>HACKDAY</p>
              <p className={`m-0 ${iceland.className}`}>2024</p>
            </div>
          </Link>
          <div
            className={`flex md:flex-row flex-col ${iceland.className} items-start justify-start py-0 px-0 box-border md:gap-10 gap-5 max-w-full z-[5]`}
          >
            <Link
              href="/form"
              className="cursor-pointer rounded-md w-[170px] hover:bg-zinc-400 pt-[7px] pb-[7px] pr-11 pl-14 bg-aliceblue rounded-8xs flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 "
            >
              <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white " />
              <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]  ">
                APPLY
              </div>
            </Link>
            <button className="cursor-pointer rounded-md w-[170px] items-center justify-center hover:bg-zinc-400 pt-[7px] pb-[7px] pr-[62px] pl-[65px] bg-aliceblue rounded-8xs flex flex-row border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
              <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white" />
              <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]">
                FAQ
              </div>
            </button>
            <button className="cursor-pointer rounded-md w-[170px] items-center justify-center hover:bg-zinc-400 pt-[7px] pb-[7px] pr-[27px] pl-[34px] bg-aliceblue rounded-8xs flex flex-row border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
              <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white" />
              <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]">
                SCHEDULE
              </div>
            </button>
          </div>
          {/* <div className="w-[119px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <button className="cursor-pointer pt-0 pb-[3px] pr-6 pl-0 bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start z-[2] border-[1px] border-solid border-white">
              <div className="h-[34px] flex-1 relative rounded-8xs bg-white" />
              <div className="relative text-5xl leading-[24px] font-iceland text-black text-left whitespace-nowrap z-[1] ml-[-88px]">
                Sign in
              </div>
              <div className="h-[34px] w-[119px] relative rounded-8xs box-border hidden z-[3] border-[1px] border-solid border-white" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
