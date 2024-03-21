// import Image from 'next/image'
// import { iceland } from './ui/fonts'

// export default function Venue() {
//   return (
//     <section className="bg-transparent flex flex-col items-center justify-start pt-0 px-5 box-border gap-[35px_0px] max-w-full text-center text-57xl text-white">
//       <div
//         className={`${iceland.className} flex flex-row items-start md:text-6xl text-4xl justify-center py-0 px-5`}
//       >
//         Venue & Parking
//       </div>
//       <div className=" flex md:flex-row flex-col items-center justify-start max-w-full text-left font-regular-14 lg:gap-[0px_134px]">
//         <div className=" text-xl">
//           More info on venue and parking coming soon.
//         </div>
//         <div className="rounded-sm bg-aliceblue box-border flex flex-row items-center justify-center pt-[27px] pb-[26px] pr-[25px] pl-[26px] max-w-full border-[1px] border-solid border-white">
//           <div className="md:h-[390px] rounded-3xs flex flex-row items-center justify-start bg-cover bg-no-repeat bg-[top] z-[1]">
//             <Image
//               className=" rounded-3xs object-cover"
//               width={687}
//               height={390}
//               alt=""
//               src="/map@2x.png"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from "next/image";
import { iceland } from "./ui/fonts";

export default function Venue() {
  return (
    <section className="bg-transparent flex flex-col items-center justify-start pt-0 px-5 box-border gap-[35px_0px] max-w-full text-center text-57xl text-white">
      <div
        className={`${iceland.className}  flex flex-row items-start md:text-6xl text-4xl justify-center py-0 px-5`}
      >
        Venue & Parking
      </div>
      <div className=" max-[640px]:justify-center flex md:flex-row flex-col items-center justify-start max-w-full text-left font-regular-14 lg:gap-[0px_134px]">
        {/* <div className=" text-xl max-[640px]:text-[18px]">
          Park in lot F10 which will be marked in blue on the HackUTA Event
          Parking Map on the day of event.
        </div> */}
        <div className=" rounded-lg bg-[#EBF5FF1A]  bg-aliceblue box-border max-[640px]:gap-[5px_0px] gap-[20px_0px] flex flex-col items-center justify-center max-w-full border-[1px] border-solid border-white max-[640px]:p-5 p-10 w-full ">
          <div className="  rounded-3xs flex flex-row items-center justify-start bg-cover bg-no-repeat bg-[top] z-[1] ">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=17d4SqZ5DRYsMwP1y5kkszrcxU3zc2-k&ehbc=2E312F"
              className="max-[640px]:w-full max-[640px]:h-[450px] h-[640px] w-[1024px] rounded-lg"
            />
          </div>
          <div className="flex flex-row max-[640px]:flex-col relative max-[640px]:top-[10px] max-[640px]:gap-2  gap-5">
            <a
              className="font-mono font-extrabold lg:text-[20px] px-5 py-3 bg-slate-700 rounded-lg text-center"
              target="_blank"
              href="https://www.google.com/maps/place/32%C2%B043'41.5%22N+97%C2%B006'39.0%22W/@32.7281042,-97.1108277,19.98z/data=!4m4!3m3!8m2!3d32.7281944!4d-97.1108333?entry=ttu"
            >
              Google Maps
            </a>
            <a
              className=" font-mono font-extrabold lg:text-[20px] px-5 py-3 p-5 bg-slate-700  rounded-lg text-center"
              target="_blank"
              href="https://maps.apple.com/place?ll=32.728052,-97.110779&q=Dropped%20Pin&t=m"
            >
              Apple Maps
            </a>
            <a
              className=" font-mono font-extrabold lg:text-[20px] px-5 py-3 p-5 bg-slate-700 rounded-lg text-center"
              target="_blank"
              href="https://www.hackuta.org/images/hackuta2023map.png"
            >
              PDF Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
