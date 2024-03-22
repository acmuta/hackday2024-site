"use client";
import { iceland } from "./ui/fonts";
import React, { forwardRef } from "react";
const FAQ_Question = ({ data }: { data: any }) => {
  return (
    <>
      <div className="group  justify-center items-center  bg-[#EBF5FF1A] rounded-lg self-stretch flex-1 relative rounded-3xs bg-aliceblue border-[1px] border-solid border-white">
        <center className="flex h-max justify-center items-center m-2 group-hover:mt-2">
          <p className=" text-xl">{data.question}</p>
        </center>
        <div className=" h-[0px] answer hidden relative  mx-10 my-2  group-hover:block  group-hover:h-auto group-hover: max-h-max  group-hover:transition-height  group-hover:duration-700  group-hover:ease-out  border-black p-2   ">
          {data.answer}
        </div>
      </div>
    </>
  );
};
const hackDayData = [
  {
    question: "What is HackDay?",
    answer:
      "In addition to the opportunity to submit a project for judging, we offer free food and fun events.",
  },
  {
    question: "What are the requirements for admittance?",
    answer:
      "You must be a UTA student. If you are still in high school or below, we will not be able to accept you.",
  },
  {
    question: "How do teams work?",
    answer:
      "Teams can be up to 4 members. If you don't have a team, don’t worry! Joining a team of new friends is the best part of a hackathon. We will have team matching available for everyone on the day of the event, but if you would like to ask around in our discord and create a team beforehand, that's okay too!",
  },
  {
    question: "Do I need experience to participate?",
    answer:
      "We encourage everyone to come, regardless of skill level. There is no experience required and there are many opportunities to learn and grow.",
  },
  {
    question: "Where do I park?",
    answer:
      "Park in lot F10 which will be marked in blue on the HackUTA Event Parking Map on the day of event.",
  },
  {
    question: "How much does attending cost?",
    answer:
      "HackDay 2024 will be completely free to hackers! We will be providing meals for free.",
  },
  {
    question: "Travel reimbursements?",
    answer:
      "As of right now, there is no plan to provide travel reimbursements or accommodations. However, if room in our budget appears, we will make a notification during the event. Travel accommodations will have to be arranged individually.",
  },
  {
    question: "Where is the venue?",
    answer:
      "Our main venue this year is UTA's brand-new Social Work and Smart Hospital (SWSH) building, rooms 104/105. The event will take place March 22, 2024! Exact schedule coming soon.",
  },
  {
    question: "Are there any rules?",
    answer:
      "All work must be done during the 8-hour period of the event. You can't demo something you didn't build. All attendees (hackers, supporters, mentors, volunteers, etc.) must abide by the MLH Code of Conduct.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "Bring yourself, your valid university ID, another form of ID proving you are over 18 years old, laptop, charger for your computer, hygienic items for the day. Firearms, weapons, alcohol, illegal drugs, and power tools are not allowed. Smiles and high-fives are welcome. 🤠🤚",
  },
  {
    question: "What do I need to wear?",
    answer:
      "Wear whatever you are most comfortable in! No need to wear anything professional. However, we do require you to be within the MLH Code of Conduct.",
  },
  {
    question: "Who should I contact if I have any questions?",
    answer:
      "You may email us at hello@hackuta.org, or join our Discord Server.",
  },
];

export default function FAQ() {
  const handleScrollClick = () => {
    const faqContainer = document.getElementById("customScroll") || null;
    console.log(faqContainer);
    if (faqContainer != null) {
      faqContainer.scrollBy(0, 100);
    }
  };
  return (
    <div className="max-[640px]:justify-center max-[640px]:items-center  max-[640px]:flex-col flex flex-row w-full items-start justify-start pt-0 px-5 pb-[248px] box-border gap-[0px_157px] max-w-full text-left text-57xl text-white font-iceland lg:flex-wrap lg:gap-[0px_157px] mq750:gap-[0px_157px] mq1050:pb-[161px] mq1050:box-border mq450:gap-[0px_157px] mq450:pb-[105px] mq450:box-border ">
      <div className="flex flex-row items-center justify-start gap-[0px_36px] lg:flex-1 ">
        <div className="flex flex-col items-start justify-start gap-[27px_0px] top-[120px] relative">
          <h3
            className={`${iceland.className} max-[640px]:text-[38px] text-[76px] m-0 relative text-inherit leading-[73px] font-normal font-inherit inline-block`}
          >
            WHAT IS HACKDAY?
          </h3>
          <div
            className={` max-[640px]:text-[18px] text-[36px] h-[432px] relative text-17xl leading-[48px] whitespace-pre-wrap inline-block max-w-full font-regular-14 mq1050:text-10xl mq1050:leading-[38px] mq450:text-3xl mq450:leading-[29px]`}
          >
            <span>
              In addition to the opportunity to submit a project for judging, we
              offer free food and fun events.
            </span>
            {/* <span className="font-extralight">{` `}</span>
            <span>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</span>
            <span className="font-extralight">{` `}</span> */}
          </div>
        </div>
        <div className="h-[423px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-[640px]:hidden">
          <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-white" />
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border max-[640px]:min-w-[354px] min-w-[454px] max-w-full text-center lg:flex-1 mq750:min-w-full ">
        <div className="gap-[47px_0px] flex flex-col items-center justify-start w-full">
          <h3
            className={` ${iceland.className} max-[640px]:text-[38px] text-[76px] m-0 relative text-inherit leading-[51px] font-normal font-inherit inline-block shrink-0 mq1050:text-42xl mq1050:leading-[41px] mq450:text-27xl mq450:leading-[31px]`}
          >
            FAQs
          </h3>
          <div
            id="customScroll"
            className="customScroll scroll-mx-96 faqContainer h-[450px] overflow-y-auto scroll-smooth  self-stretch  flex flex-col items-center justify-start gap-[31px_0px] mq450:gap-[31px_0px] "
          >
            {hackDayData.map((data, index) => {
              return (
                <>
                  <FAQ_Question data={data} key={index} />
                </>
              );
            })}
          </div>
          <img
            className="w-[26px] h-6 relative object-contain"
            loading="lazy"
            alt=""
            src="/more-arrow.svg"
            onClick={handleScrollClick}
          />
        </div>
      </div>
    </div>
  );
}
