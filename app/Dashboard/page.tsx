import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { PiArrowDownBold } from "react-icons/pi";
import WorkoutGenerator from "../Workout/workoutcontainer/page";
import WorkoutInfo from "../Workout/workoutinfo/page";
import WorkoutLog from "../Workout/workoutlog/page";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col justify-center items-center m-6 mx-auto px-auto">
        <LogoutLink>
            <Link href="/">
            <Button className="m-4">Home</Button>
            </Link>
            <Button className="bg-black">Log out</Button>
            </LogoutLink>
            <div className="m-6">
              <div className="flex-col w-3/4 mx-auto px-auto flex justify-center items-center font-semibold text-md m-4">
                <h1 className="m-2"> Begin by setting your workout preferences with our generators.<br></br></h1>
                  <h1 className="m-2"> The first, 'Options,' crafts a personalized workout duration, warm-up, and stretches.<br></br> 
                  </h1>
                  <h1 className="m-2">
                    The second, 'Workout' creates a Workout based on your preferences. Once done, log your achievements! Best of luck—you've got this!</h1>
              </div>
        <WorkoutInfo />
        <PiArrowDownBold className="m-2 mx-auto text-4xl" />
        <WorkoutGenerator />
        <PiArrowDownBold className="m-2 mx-auto text-4xl" />
        <WorkoutLog />
      </div>
      </div>
    </div>
  );
}
