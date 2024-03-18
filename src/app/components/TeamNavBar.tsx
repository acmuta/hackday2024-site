import Image from "next/image";
import { iceland } from "./ui/fonts";
import Link from "next/link";
export default function TeamNavBar() {
  return (
    <div className="flex max-w-ful p-5 items-center  justify-center md:space-x-80 md:space-y-0 space-y-4 md:flex-row flex-col ">
      <Link href="/" className="flex flex-row gap-x-3 justify-center mr-3">
        <Image
          src={"/hackutalogo-1@2x.png"}
          width={60}
          height={60}
          alt="logo"
        ></Image>
        <div className="flex  flex-col gap-y-0 justify-center">
          <h1 className={`${iceland.className} text-white text-xl`}>HACKDAY</h1>
          <h1 className={`${iceland.className} text-white text-xl`}>2024</h1>
        </div>
      </Link>
      <div className="flex md:flex-row flex-col   md:gap-10 gap-5 justify-center  ">
        <Link href="/" className="">
          <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl  ">
            <p className={`${iceland.className}  text-white`}>CHALLENGES</p>
          </div>
        </Link>

        <Link href="/" className="">
          <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]  hover:scale-105 transition ease-in-out duration-100 text-xl ">
            <p className={`${iceland.className}  text-white`}>LEADERBOARD</p>
          </div>
        </Link>
        <Link href="/" className="">
          <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl  ">
            <p className={`${iceland.className}  text-white`}>TEAMS</p>
          </div>
        </Link>
        <Link href="/" className="">
          <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl ">
            <p className={`${iceland.className}  text-white`}>JUDGE</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
