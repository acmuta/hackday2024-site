// "use client";
// import Image from "next/image";
// import { iceland } from "./ui/fonts";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";

// export default function TeamNavBar() {
//   const { data: session } = useSession();
//   const handleSignOut = () => {
//     signOut({ callbackUrl: "/", redirect: true });
//   };

//   return (
//     <div className="flex max-w-ful p-5 items-center  justify-center md:space-x-80 md:space-y-0 space-y-4 md:flex-row flex-col ">
//       <Link href="/" className="flex flex-row gap-x-3 justify-center mr-3">
//         <Image
//           src={"/hackutalogo-1@2x.png"}
//           width={60}
//           height={60}
//           alt="logo"
//         ></Image>
//         <div className="flex  flex-col gap-y-0 justify-center">
//           <h1 className={`${iceland.className} text-white text-xl`}>HACKDAY</h1>
//           <h1 className={`${iceland.className} text-white text-xl`}>2024</h1>
//         </div>
//       </Link>
//       <div className="flex md:flex-row flex-col   md:gap-5 gap-5 justify-center  ">
//         <Link href="/" className="">
//           <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl  ">
//             <p className={`${iceland.className}  text-white`}>CHALLENGES</p>
//           </div>
//         </Link>

//         <Link href="/" className="">
//           <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]  hover:scale-105 transition ease-in-out duration-100 text-xl ">
//             <p className={`${iceland.className}  text-white`}>LEADERBOARD</p>
//           </div>
//         </Link>
//         <Link href="/" className="">
//           <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl  ">
//             <p className={`${iceland.className}  text-white`}>TEAMS</p>
//           </div>
//         </Link>
//         <Link href="/" className="">
//           <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl ">
//             <p className={`${iceland.className}  text-white`}>JUDGE</p>
//           </div>
//         </Link>
//         <div className="flex justify-center items-center border-solid border-2 border-white cursor-pointer rounded-md w-[170px]   hover:scale-105 transition ease-in-out duration-100 text-xl  ">
//           {session ? (
//             //@ts-ignore
//             <div
//               className={`${iceland.className}  text-white`}
//               onClick={handleSignOut}
//             >
//               SIGN OUT
//             </div>
//           ) : (
//             <a
//               href="/api/auth/signin"
//               className={`${iceland.className}  text-white`}
//             >
//               SIGN IN
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { iceland } from "./ui/fonts";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import router from "next/router";

export default function Navbar() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };
  const handleSignOut = () => {
    signOut({ callbackUrl: "/", redirect: true });
  };
  return (
    <div>
      <div className="flex flex-row items-start justify-center max-w-full text-left text-xl text-white font-iceland p-5 m-0">
        <div className=" flex items-start max-w-full justify-between md:space-x-80 md:space-y-0 space-y-4 md:flex-row flex-col">
          <Link
            href="/"
            className="flex items-center justify-start py-0 space-x-3 "
          >
            <Image
              className="z-20"
              src={"/hackutalogo-1@2x.png"}
              width={40}
              height={40}
              alt="logo"
            />
            <div className="flex flex-col justify-center leading-[19px] z ">
              <p className={`m-0 ${iceland.className}`}>HACKDAY</p>
              <p className={`m-0 ${iceland.className}`}>2024</p>
            </div>
          </Link>
          <div
            className={`flex md:flex-row flex-col ${iceland.className} items-start justify-start py-0 px-0 box-border md:gap-5 gap-2 max-w-full z-[5]`}
          >
            <div className="cursor-pointer rounded-md w-[150px] hover:bg-zinc-400 pt-[7px] pb-[7px] pr-11 pl-14 bg-aliceblue rounded-8xs flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
              <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white " />
              <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]  ">
                CHALLENGES
              </div>
            </div>
            <button className="cursor-pointer rounded-md w-[150px] items-center justify-center hover:bg-zinc-400 pt-[7px] pb-[7px] pr-[62px] pl-[65px] bg-aliceblue rounded-8xs flex flex-row border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
              <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white" />
              <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]">
                LEADERBOARD
              </div>
            </button>
            <Link href="/team">
              <button className="cursor-pointer rounded-md w-[150px] items-center justify-center hover:bg-zinc-400 pt-[7px] pb-[7px] pr-[27px] pl-[34px] bg-aliceblue rounded-8xs flex flex-row border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
                <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white" />
                <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]">
                  TEAMS
                </div>
              </button>
            </Link>
            <Link href="/judge">
              <div className="cursor-pointer rounded-md w-[150px] hover:bg-zinc-400 pt-[7px] pb-[7px] pr-11 pl-14 bg-aliceblue rounded-8xs flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
                <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white " />
                <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]  ">
                  JUDGE
                </div>
              </div>
            </Link>
            <button className="cursor-pointer rounded-md w-[150px] items-center justify-center hover:bg-zinc-400 pt-[7px] pb-[7px] pr-[27px] pl-[34px] bg-aliceblue rounded-8xs flex flex-row border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition ease-in-out duration-100 ">
              <div className="h-[37px] relative rounded-8xs bg-aliceblue box-border hidden border-[1px] border-solid border-white" />
              <div className="relative text-xl leading-[24px] font-iceland text-white text-left z-[1]">
                {session ? (
                  // <a
                  //   href="/api/auth/signout"
                  //   className={`${iceland.className}  text-white`}
                  // >
                  //   SIGN OUT
                  // </a>
                  <div onClick={handleSignOut}>
                    <p className={`${iceland.className}  text-white`}>
                      SIGN OUT
                    </p>
                  </div>
                ) : (
                  <a
                    href="/api/auth/signin"
                    className={`${iceland.className}  text-white`}
                  >
                    SIGN IN
                  </a>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
