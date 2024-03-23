import CountdownTimer from "./Timer";
import { iceland } from "./ui/fonts";
import { PulseBeams } from "./ui/pulse-beams";
import Link from "next/link";

export default function Homepage() {
<<<<<<< HEAD
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
=======
	return (
		<div className="flex flex-col items-center justify-start box-border relative md:h-[100vh] md:py-16 py-0 w-full text-left text-21xl text-whitesmoke font-regular-14">
			<div className="flex flex-col items-center max-w-full space-y-10 mt-16 md:mt-0">
				
					<div className="flex flex-col items-center justify-center">
						<div className="relative md:text-3xl text-lg font-bold text-white drop-shadow-eclipse">
							HACKUTA X FOUNDERS ARENA
						</div>
						<div
							className={`${iceland.className} relative md:text-9xl text-7xl m-0 leading-none p-0 tracking-wider font-normal font-iceland text-white inline-block overflow-hidden`}
						>
							HACKDAY
						</div>
						<div>
							<PulseBeams></PulseBeams>
						</div>
					
				</div>
				<div className={`${iceland.className} w-full md:text-4xl text-2xl mt-0`}>
					<div className="flex flex-row items-center justify-center space-x-10">
						<Link
							href="/form"
							className="font-iceland cursor-pointer rounded-md px-6 py-2 hover:scale-105 hover:bg-opacity-35 hover:text-white transition-all text-black bg-white drop-shadow border-2 border-solid border-white"
						>
							APPLY
						</Link>

						<a
							href="https://hackuta.org/discord"
							className="w-16 h-16 px-4 py-2 rounded-md fill-white hover:bg-white hover:fill-black hover:scale-105 hover:bg-opacity-100  transition ease-in-out duration-200 text-white flex items-center space-x-2 box-border overflow-hidden border-[1px] border-solid border-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="800px"
								height="800px"
								viewBox="0 -28.5 256 256"
								version="1.1"
								preserveAspectRatio="xMidYMid"
							>
								<g>
									<path
										d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
										fill-rule="nonzero"
									></path>
								</g>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
>>>>>>> ab80948b93c4eeaa42e250c67d61405d0a962128
}
