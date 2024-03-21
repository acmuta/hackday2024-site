import Image from 'next/image'
import { iceland } from './ui/fonts'

export default function Venue() {
  return (
    <section className="bg-transparent flex flex-col items-center justify-start pt-0 px-5 box-border gap-[35px_0px] max-w-full text-center text-57xl text-white">
      <div
        className={`${iceland.className} flex flex-row items-start md:text-6xl text-4xl justify-center py-0 px-5`}
      >
        Venue & Parking
      </div>
      <div className=" flex md:flex-row flex-col items-center justify-start max-w-full text-left font-regular-14 lg:gap-[0px_134px]">
        <div className=" text-xl">
          More info on venue and parking coming soon.
        </div>
        <div className="rounded-sm bg-aliceblue box-border flex flex-row items-center justify-center pt-[27px] pb-[26px] pr-[25px] pl-[26px] max-w-full border-[1px] border-solid border-white">
          <div className="md:h-[390px] rounded-3xs flex flex-row items-center justify-start bg-cover bg-no-repeat bg-[top] z-[1]">
            <Image
              className=" rounded-3xs object-cover"
              width={687}
              height={390}
              alt=""
              src="/map@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
