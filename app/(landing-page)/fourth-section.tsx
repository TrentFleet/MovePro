import {
  PiAirplaneFill,
  PiArrowRight,
  PiCalendarCheckFill,
  PiCheckCircleFill,
  PiClipboardLight,
  PiFlag,
  PiFlagCheckeredFill,
  PiHouseFill,
  PiHouseLight,
  PiWatchFill,
} from "react-icons/pi";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-600" />,
    name: "Home Page",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get Started <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/assets/dashboard1.jpg",
  },
];

const SeventhSection = () => {
  return (
    <>
      <div className="flex flex-col pt-4 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          Our Dashboard
        </div>
      </div>
      <div className="grid xl:grid-cols-4  md:grid-cols-2 md:row-span-1  gap-4  xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? " xl:col-span-2 xl:row-span-3  md:col-span-2  flex-col md:flex-row xl:flex-col"
                : ""
            } bg-slate-50 p-6 rounded-xl  flex ${
              index === 0 ? "justify-between" : ""
            }`}
          >
            <div className="flex flex-col ">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
              {item.button}
            </div>
            {item.image && (
              <div
                className={` ${
                  index !== 0 ? "justify-between" : "flex-col justify-end"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} Image`}
                  width={1500}
                  height={1500}
                  className="
                    mt-10
               w-200
               rounded-xl
  
                    
                    "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SeventhSection;
