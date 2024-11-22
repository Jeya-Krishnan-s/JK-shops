import React, { useState, useEffect } from "react";

const Time= () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-01T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50"  >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6" id="back">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          
        </div>

        {/* Right Section - Text and Countdown */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get -50% from Summer Collection
          </h2>
          <div className="flex space-x-4 mt-4 text-pink-500 text-xl font-bold">
            <div className="text-center">
              <p>{timeLeft.days}</p>
              <p className="text-sm text-gray-500">DAYS</p>
            </div>
            <div className="text-center">
              <p>{timeLeft.hours}</p>
              <p className="text-sm text-gray-500">HOURS</p>
            </div>
            <div className="text-center">
              <p>{timeLeft.minutes}</p>
              <p className="text-sm text-gray-500">MINUTES</p>
            </div>
            <div className="text-center">
              <p>{timeLeft.seconds}</p>
              <p className="text-sm text-gray-500">SECONDS</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Time;
