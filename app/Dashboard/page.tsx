"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { PiArrowDownBold } from "react-icons/pi";
import WorkoutGenerator from "../Workout/workoutcontainer/page";
import WorkoutInfo from "../Workout/workoutinfo/page";
import WorkoutLog from "../Workout/workoutlog/page";
import dynamic from 'next/dynamic';

const InstructionSection = dynamic(() => import('@/components/InstructionSection'), { ssr: false });

// ... rest of the file

export default function Dashboard() {
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  const toggleInstructionVisibility = () => {
    setIsInstructionVisible(!isInstructionVisible);
  };

  return (
    <main>
      <div className="flex flex-col bg-gradient-to-t from-slate-50 justify-center items-center m-6 mx-auto px-auto">
        <LogoutLink>
          <Button className="bg-black">Log out</Button>
        </LogoutLink>
        {isInstructionVisible && (
          <InstructionSection />
        )}
        <div className="m-6">
          <WorkoutInfo />
          <PiArrowDownBold className="m-2 mx-auto text-4xl" />
          <WorkoutGenerator />
          <PiArrowDownBold className="m-2 mx-auto text-4xl" />
          <WorkoutLog />
        </div>
        <Button onClick={toggleInstructionVisibility}>
          {isInstructionVisible ? 'Hide Instructions' : 'Show Instructions'}
        </Button>
      </div>
    </main>
  );
}
