import Navbar from "@/components/navbar/navbar";
import WorkoutInfo from "./workoutinfo/page";
import WorkoutGenerator from "./workoutcontainer/page";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import WorkoutLog from "./workoutlog/page";
import { PiArrowCircleUp, PiArrowDownBold } from "react-icons/pi";

const Workout = () => {
  return (
    <div>
      <Navbar />
      <Link href="/">
        <Button className="bg-purple-600 m-8 p-4">
          <HomeIcon className="text-2xl mr-2" />
          Home
        </Button>
      </Link>
      <div className="lg:flex lg:flex-col lg:mx-20 sm:flex-col gap-10 justify-center items-center ">
        <WorkoutInfo />
        <PiArrowDownBold className="m-2 mx-auto text-4xl" />
        <WorkoutGenerator />
        <PiArrowDownBold className="m-2 mx-auto text-4xl" />
        <WorkoutLog />
      </div>
      <div
        className="text-purple-500 flex p-4 m-4 items-center hover:underline text-lg hover:cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        Back to Top
        <PiArrowCircleUp className="ml-3 text-2xl" />
      </div>
    </div>
  );
};

export default Workout;
