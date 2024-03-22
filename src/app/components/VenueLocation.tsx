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
              src="https://www.google.com/maps/d/embed?mid=1VJ-nNE1Lh8NjEzRZW1jNkflhKEeiEQ0&ehbc=2E312F"
              className="max-[640px]:w-full max-[640px]:h-[450px] h-[640px] w-[1024px] rounded-lg"
            />
          </div>
          <div>
            <div>
              <p className="text-2xl font-mono text-slate-300">
                Building of Social work and Smart Hospital (SWSH)
              </p>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <img width={"28px"} src="/location.svg" />
              <p className="text-2xl font-mono font-bold ">Room no. 104 & 105</p>
            </div>
          </div>
          <div className="flex flex-row max-[640px]:flex-col relative max-[640px]:top-[10px] max-[640px]:gap-2  gap-5">
            <a
              className="font-mono font-extrabold lg:text-[20px] px-5 py-3 bg-slate-700 rounded-lg text-center"
              target="_blank"
              href="https://www.google.com/maps/place/School+of+Social+Work+and+Smart+Hospital+(SWSH)/@32.7274712,-97.1117394,20.09z/data=!4m12!1m5!3m4!2zMzLCsDQzJzQxLjUiTiA5N8KwMDYnMzkuMCJX!8m2!3d32.7281944!4d-97.1108333!3m5!1s0x864e7d733472202d:0x48ce4f3f6b59840c!8m2!3d32.7273039!4d-97.1113082!16s%2Fg%2F1hdztzc3s?entry=ttu"
            >
              Google Maps
            </a>
            <a
              className=" font-mono font-extrabold lg:text-[20px] px-5 py-3 p-5 bg-slate-700  rounded-lg text-center"
              target="_blank"
              href="https://maps.apple.com/?address=501%20W%20Mitchell%20St%0AArlington,%20TX%20%2076019%0AUnited%20States&auid=15965471530354566328&ll=32.727529,-97.111612&lsp=9902&q=School%20of%20Social%20Work&t=m "
            >
              Apple Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
