"use client";

import { useState, useEffect } from "react";

//@ts-ignore
export default function Clock({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(targetDate);
      const now = new Date();
      //@ts-ignore
      const distance = new Date(targetDate) - now;
      console.log(distance);

      // If the countdown is over, stop the interval
      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 500);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <h1 className="relative md:bottom-14 iceland gap-x-32 flex flex-row md:text-[160px] sm:text-[80px] text-[40px]">
        <div className="flex flex-col items-center">
          <h1 className="neonText">{timeLeft.days}</h1>
          <h1 className="md:text-[50px] text-[30px]  relative md:bottom-14">
            Days
          </h1>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="neonText">{timeLeft.hours}</h1>
          <h1 className="md:text-[50px] text-[30px]  relative md:bottom-14">
            Hours
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="neonText">{timeLeft.minutes}</h1>
          <h1 className="md:text-[50px] text-[30px]  relative md:bottom-14">
            Minutes
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="neonText">{timeLeft.seconds}</h1>
          <h1 className="md:text-[50px] text-[30px]  relative md:bottom-14">
            Seconds
          </h1>
        </div>
      </h1>
    </div>
  );
}
