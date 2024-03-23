export default function Footer() {
  return (
    <footer className=" bg-[#313131] flex md:flex-row flex-col items-center md:justify-start justify-center box-border text-left text-sm md:h-40 h-60 max-[640px]:h-80  text-colour-main-grey-400 font-regular-14 md:space-x-10 space-x-0">
      <div className="flex flex-col justify-center items-center p-5">
        <img
          className="w-[74px] h-[74px] relative object-cover"
          loading="lazy"
          alt=""
          src="/hackutalogo-1@2x.png"
        />
      </div>
      <div className="flex flex-col lg:gap-[47px_0px] relative top-5 w-[-webkit-fill-available] pr-20 max-[640px]:justify-center max-[640px]:items-center max-[640px]:pr-0">
        <div className="flex flex-row items-start justify-start max-[640px]:justify-center max-[640px]:items-center">
          <div className="relative leading-[24px] font-medium  ">
            ©2023 ACM @ UTA
          </div>
        </div>
        <div className=" flex flex-row flex-wrap  items-end justify-center gap-[0px_37px] text-colour-main-blue-300">
          <div className=" flex flex-col  flex-1 items-start justify-start gap-[20px_0px] ">
            <div className="h-[1px]  w-[-webkit-fill-available] relative bg-white"  />
            <div className="w-[245px] flex flex-row items-start justify-between gap-[20px] max-[640px]:flex-col max-[640px]:justify-center max-[640px]:items-center">
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
