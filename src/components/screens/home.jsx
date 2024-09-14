"use client";
import React, {useState} from "react";
import Steps from "../steps";
import Image from "next/image";
import Duration from "../../../public/assets/clock.png";
import Arrow from "../../../public/assets/arrow2.png";
import Interval from "../../../public/assets/interval.png";
import Designer from "../../../public/assets/designer.png";
import Calendar from "../calendar";
import Globe from "../../../public/assets/globe.png";
function Home() {
  const durationContent = [
    {
      time: "30 mins",
    },
    {
      time: "45 mins",
    },
    {
      time: "60 mins",
    },
    {
      time: "90 mins",
    },
    {
      time: "120 mins",
    },
  ];
  const intervalContent = [
    {
      time: "5 mins",
    },
    {
      time: "10 mins",
    },
    {
      time: "20 mins",
    },
    {
      time: "30 mins",
    },
    {
      time: "45 mins",
    },
  ];
  const [duration, setDuration] = useState("60 mins");
  const [toggleDuration, setToggleDuration] = useState(false);
  const [interval, setInterval] = useState("10 mins");
  const [toggleInterval, setToggleInterval] = useState(false);
  const [date, setDate] = useState();
  return (
    <div className=" bg-[#eaf9ff] w-full h-full">
      {/* steps */}
      <div className=" flex justify-center pt-12 pb-8">
        <Steps />
      </div>
      {/*  */}
      <div className=" w-full h-full flex justify-center">
        <div className=" w-[90%] h-[75%] bg-white border-2 border-[#01B0F1] rounded-xl ">
          <div className="  cursor-pointer px-12 pt-5 pb-2 flex justify-end ">
            <div className=" px-4 py-2  text-sm text-white rounded-lg bg-[#01B0F1]">
              View Students
            </div>
          </div>
          <div className=" px-12 flex gap-2 h-[70%]">
            <div className=" basis-1/3 h-full  ">
              <div className="  font-semibold text-[18px]">Interview 1</div>
              <div className=" text-xs">(Create slots for interview)</div>
              <div className=" flex flex-col h-full justify-between ">
                <div className=" flex flex-col gap-5 py-5 px-2  max-w-[62%]">
                  {/* duration */}
                  <div
                    onClick={() => {
                      setToggleDuration(!toggleDuration);
                      setToggleInterval(false);
                    }}
                    className=" flex gap-2 justify-between items-center text-[#6F6F6F] cursor-pointer"
                  >
                    <div>
                      <Image src={Duration} alt="duration" />
                    </div>
                    <div className=" text-sm mt-0.5">Duration</div>
                    <div>
                      <div>
                        <Image width={14} height={14} src={Arrow} alt="arrow" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      toggleDuration
                        ? "h-24 flex flex-col"
                        : "h-0 absolute top-0 -left-[100vh]"
                    } transition-all ease-linear`}
                  >
                    <div className="flex flex-col gap-2 overflow-y-scroll">
                      {durationContent.map((e, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setDuration(e.time);
                              setToggleDuration(false);
                            }}
                            className={` cursor-pointer text-[#6F6F6F] text-sm border-2 ${
                              e.time == duration
                                ? " border-[#01B0F1]"
                                : "border-[#6F6F6F]"
                            } rounded-md p-2`}
                          >
                            {e.time}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Interval */}
                  <div
                    onClick={() => {
                      setToggleInterval(!toggleInterval);
                      setToggleDuration(false);
                    }}
                    className=" flex gap-2 justify-between items-center text-[#6F6F6F] cursor-pointer"
                  >
                    <div>
                      <Image src={Interval} alt="duration" />
                    </div>
                    <div className=" text-sm mt-0.5">Interval</div>
                    <div>
                      <div>
                        <Image width={14} height={14} src={Arrow} alt="arrow" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      toggleInterval
                        ? "h-24 flex flex-col"
                        : "h-0 absolute top-0 -left-[100vh]"
                    } transition-all ease-linear`}
                  >
                    <div className="flex flex-col gap-2 overflow-y-scroll">
                      {intervalContent.map((e, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setInterval(e.time);
                              setToggleInterval(false);
                            }}
                            className={` cursor-pointer text-[#6F6F6F] text-sm border-2 ${
                              e.time == interval
                                ? " border-[#01B0F1]"
                                : "border-[#6F6F6F]"
                            } rounded-md p-2`}
                          >
                            {e.time}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Designer */}
                  <div className=" flex gap-2 justify-between items-center text-[#6F6F6F] cursor-pointer">
                    <div>
                      <Image src={Designer} alt="duration" />
                    </div>
                    <div className=" text-sm mt-0.5">Graphic Designer</div>
                  </div>
                </div>
                {/* time zone */}
                <div>
                  <div className="font-semibold text-[18px]">Time zone</div>
                  <div className=" flex gap-2 items-center">
                    <div className=" relative w-4 h-4">
                      <Image src={Globe} fill alt="globe" />
                    </div>
                    <div className="text-[14px] text-gray-700">
                      Indian Standard Time
                    </div>
                    <div className=" relative w-4 h-4">
                      <Image src={Arrow} fill alt="globe" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" basis-2/4 h-full ">
              <div className=" font-semibold  text-[18px]">
                Select Date and Time
              </div>
              {/* calendar */}
              <div>
                <Calendar setDate={setDate} />
              </div>
            </div>
            {/* times */}
            <div className=" basis-1/3 h-full ">
              <div className=" font-semibold  text-[18px]">
                {date?.toDateString().slice(3)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
