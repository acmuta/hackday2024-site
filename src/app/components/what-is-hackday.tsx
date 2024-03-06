export default function FAQ() {
  return (
    <div className="flex flex-row w-full items-end justify-start pt-0 px-5 pb-[248px] box-border gap-[0px_157px] max-w-full text-left text-57xl text-white font-iceland lg:flex-wrap lg:gap-[0px_157px] mq750:gap-[0px_157px] mq1050:pb-[161px] mq1050:box-border mq450:gap-[0px_157px] mq450:pb-[105px] mq450:box-border">
      <div className="flex flex-row items-center justify-start gap-[0px_36px] lg:flex-1 ">
        <div className="flex flex-col items-start justify-start gap-[27px_0px]">
          <h3 className="m-0 relative text-inherit leading-[73px] font-normal font-inherit inline-block">
            WHAT IS HACKDAY?
          </h3>
          <div className="h-[432px] relative text-17xl leading-[48px] whitespace-pre-wrap inline-block max-w-full font-regular-14 mq1050:text-10xl mq1050:leading-[38px] mq450:text-3xl mq450:leading-[29px]">
            <span>
              Idk what hackday is tbh. Honestly, hackday is whatever you think
              it means.
            </span>
            <span className="font-extralight">{` `}</span>
            <span>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</span>
            <span className="font-extralight">{` `}</span>
          </div>
        </div>
        <div className="h-[423px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
          <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-white" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border min-w-[454px] max-w-full text-center lg:flex-1 mq750:min-w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <h3 className="m-0 relative text-inherit leading-[51px] font-normal font-inherit inline-block shrink-0 mq1050:text-42xl mq1050:leading-[41px] mq450:text-27xl mq450:leading-[31px]">
            FAQs
          </h3>
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[31px_0px] mq450:gap-[31px_0px]">
            <div className="self-stretch flex-1 relative rounded-3xs bg-aliceblue border-[1px] border-solid border-white">
              This is a question
            </div>
            <div className="self-stretch relative rounded-3xs bg-aliceblue box-border border-[1px] border-solid border-white">
              This is a question
            </div>
            <div className="self-stretch relative rounded-3xs bg-aliceblue box-border border-[1px] border-solid border-white">
              This is a question
            </div>
            <div className="self-stretch relative rounded-3xs bg-aliceblue box-border border-[1px] border-solid border-white">
              This is a question
            </div>
            <img
              className="w-[26px] h-6 relative object-contain"
              loading="lazy"
              alt=""
              src="/more-arrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
