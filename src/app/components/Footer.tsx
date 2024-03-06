export default function Footer() {
  return (
    <footer className="bg-darkslategray flex md:flex-row flex-col items-center md:justify-start justify-center box-border text-left text-sm md:h-40 h-60 text-colour-main-grey-400 font-regular-14 space-x-10">
      <div className="flex flex-col justify-center items-center p-5">
        <img
          className="w-[74px] h-[74px] relative object-cover"
          loading="lazy"
          alt=""
          src="/hackutalogo-1@2x.png"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-start justify-center max-w-full">
          <div className="relative leading-[24px] font-medium">
            ©2023 Yourcompany
          </div>
        </div>
        <div className=" flex flex-row flex-wrap items-end justify-center gap-[0px_37px] text-colour-main-blue-300">
          <div className=" flex flex-col items-start justify-start gap-[34px_0px] ">
            <div className="h-px relative bg-lightgray" />
            <div className="w-[245px] flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[24px]">Home</div>
              <div className="relative leading-[24px]">About</div>
              <div className="w-[49px] relative leading-[24px] inline-block">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
