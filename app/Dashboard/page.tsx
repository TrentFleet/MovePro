"use client";

import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { PiArrowDownBold } from "react-icons/pi";
import WorkoutGenerator from "../Workout/workoutgenerator/page";
import WorkoutLog from "../Workout/workoutlog/page";
import dynamic from "next/dynamic";
import Logo from "@/components/navbar/_components/logo";
import ApiExercises from "../MyApi/page";

const InstructionSection = dynamic(
  () => import("@/components/InstructionSection"),
  { ssr: false }
);

// ... rest of the file

export default function Dashboard() {
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  const toggleInstructionVisibility = () => {
    setIsInstructionVisible(!isInstructionVisible);
  };

  return (
    <main>
      <div className="flex justify-evenly gap-20 m-6">
        <Logo />
        <LogoutLink>
          <Button className="bg-black">Log out</Button>
        </LogoutLink>
      </div>
      <div className="flex flex-col bg-gradient-to-t from-slate-50 justify-center items-center m-6 mx-auto px-auto">
        {isInstructionVisible && <InstructionSection />}
          <WorkoutGenerator />
        <div className="m-6 justify-center max-w-sm items-center">
      <ApiExercises />
          <WorkoutLog />
      </div>

      </div>
    </main>
  );
}
