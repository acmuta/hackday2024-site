import CountdownTimer from "./Timer";
import { iceland } from "./ui/fonts";
import { PulseBeams } from "./ui/pulse-beams";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-start box-border relative h-[100vh] md:py-20 py-0 w-full text-left text-21xl text-whitesmoke font-regular-14">
      <div className="flex flex-col items-center max-w-full space-y-40">
        <div className="flex flex-col items-center space-y-28">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative md:text-4xl text-xl font-bold text-white drop-shadow-eclipse">
              HACKUTA X FOUNDERS ARENA
            </div>
            <div
              className={`${iceland.className} relative md:text-9xl text-4xl tracking-[20px] font-normal font-iceland text-white inline-block z-[4] overflow-hidden`}
            >
              HACKDAY
            </div>
            <div>
              <PulseBeams></PulseBeams>
            </div>
          </div>
        </div>
        <div className={`${iceland.className} w-full md:text-4xl text-2xl`}>
          <div className="flex flex-row items-center justify-center space-x-10">
            <Link
              href="/form"
              className="cursor-pointer rounded-md p-5 hover:scale-105 hover:bg-opacity-35 hover:text-white transition ease-in-out duration-200 text-black bg-white md:w-[270px] w-[120px] rounded-3xs shadow-[0px_4px_5.5px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
            >
              <div className="relative text-29xl leading-[38px] font-iceland ">
                APPLY
              </div>
            </Link>
            <Link href={"#venueSection"}>
              <button className="cursor-pointer rounded-md p-5 hover:bg-white hover:text-black hover:scale-105 hover:bg-opacity-100  transition ease-in-out duration-200 text-white  bg-aliceblue md:w-[270px] w-[120px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <div className="relative text-29xl leading-[38px] font-icelandtext-left">
                  Learn More
                </div>
              </button>
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://discord.com/invite/4e64SfjmWS"
              className="px-4 py-2 rounded-md  hover:bg-white hover:text-black hover:scale-105 hover:bg-opacity-100  transition ease-in-out duration-200 text-white flex items-center space-x-2 box-border overflow-hidden border-[1px] border-solid border-white"
            >
              <span>Join Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
