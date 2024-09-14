import React from "react";

function Steps() {
  const steps = [
    {
      name: "Assessment",
      active: true,
      done: true,
    },
    {
      name: "Interview 1",
      active: true,
      done: false,
    },
    {
      name: "Interview 2",
      active: false,
      done: false,
    },
    {
      name: "Offer Letter",
      active: false,
      done: false,
    },
  ];
  return (
    <div className=" flex  ">
      {steps.map((e, index) => {
        return (
          <div key={e.index} className=" flex items-center">
            <div
              className={`px-4 py-1 border-2 rounded-md bg-white ${
                e.active
                  ? " border-[#1FAF38] text-[#1FAF38]"
                  : "border-[#888888] text-[#515151]"
              }`}
            >
              {e.name}
            </div>
            <div
              className={` border-b border-2 ${
                index < steps.length - 1 ? "block" : "hidden"
              }  ${e.done ? "border-[#1FAF38]" : "border-[#888888]"} w-16 h-0 `}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default Steps;
