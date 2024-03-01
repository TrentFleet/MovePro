"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import workoutInfoData from "../components-data/workoutInfoData";

const WorkoutInfo = () => {
  const [duration, setDuration] = useState("");
  const [warmUp, setWarmUp] = useState("");
  const [postWorkoutStretches, setPostWorkoutStretches] = useState("");
  const [generatedWorkoutInfo, setGeneratedWorkoutInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const workoutDurations = ["15 mins", "30 mins", "45 mins"];
  const warmUpOptions = ["Upper", "Lower", "Full"];
  const stretchesOptions = ["Upper body", "Lower body", "Full body"];

  const generateWorkoutInfo = () => {
    // Find the selected workout duration in the workoutInfoData
    const selectedWorkoutInfo = workoutInfoData.find(
      (info) => info.duration === duration
    );

    if (selectedWorkoutInfo) {
      // Access the specific warm-up based on the user's selection
      const selectedWarmUp =
        selectedWorkoutInfo.warmUp[
          warmUp as keyof typeof selectedWorkoutInfo.warmUp
        ];

      if (selectedWarmUp) {
        // Simulate generation of workout information based on selected options
        const info = `Duration: ${duration}\n\nWarm Up: ${selectedWarmUp}\n\nStretches: ${selectedWorkoutInfo.postWorkoutStretches}`;
        setGeneratedWorkoutInfo(info);
      } else {
        setGeneratedWorkoutInfo("Invalid warm-up selection.");
      }
    } else {
      setGeneratedWorkoutInfo("Invalid workout duration selected.");
    }
  };

  function handleSaveInfo() {
    // You can replace this with actual API calls or database operations
    // Send the workout information to the database or API
    // For now, we'll simulate a save operation by logging the data
    console.log("Workout Info Saved:", {
      duration,
      warmUp,
      postWorkoutStretches,
    });
  }

  return (
    <main>
      <div className="justify-center text-center max-w-sm border-2 rounded-lg p-10 border-black shadow-md transition-transform transform mx-auto">
        <h1 className="text-3xl font-bold">
          Select Workout Options
          <div className="justify-center flex m-2 p-2"></div>
        </h1>
        {generatedWorkoutInfo ? (
  <div className="flex flex-col gap-4 items-center font-semibold text-md justify-center">
    {generatedWorkoutInfo.split("\n\n").map((section, index) => (
      <div className="rounded-md m-2 p-6 border flex flex-col" key={index}>
        {section.split(":").map((info, i) => (
          <div key={i} className="m-2 text-md">
            {info.trim()}
          </div>
        ))}
      </div>
    ))}
    <div>
      <Button
        type="button"
        onClick={() => setGeneratedWorkoutInfo("")}
        className="gap-2 p-2 m-2 hover:bg-gray-800"
      >
        Start Over
      </Button>
    </div>
  </div>
) : (
  <form className="mb-2 justify-center flex flex-col">
    <label className="mb-2 flex flex-col"> {/* Added flex-col class here */}
      Workout Duration
      <select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
      >
        <option value="">Select</option>
        {workoutDurations.map((durationOption) => (
          <option key={durationOption} value={durationOption}>
            {durationOption}
          </option>
        ))}
      </select>
    </label>

    <label className="mb-2 flex flex-col"> {/* Added flex-col class here */}
      Warm Up
      <select
        value={warmUp}
        onChange={(e) => setWarmUp(e.target.value)}
        className="m-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
      >
        <option value="">Select</option>
        {warmUpOptions.map((warmUpOption) => (
          <option key={warmUpOption} value={warmUpOption}>
            {warmUpOption}
          </option>
        ))}
      </select>
    </label>

    <label className="mb-2 flex flex-col"> {/* Added flex-col class here */}
      Stretches
      <select
        value={postWorkoutStretches}
        onChange={(e) => setPostWorkoutStretches(e.target.value)}
        className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
      >
        <option value="">Select</option>
        {stretchesOptions.map((stretchOption) => (
          <option key={stretchOption} value={stretchOption}>
            {stretchOption}
          </option>
        ))}
      </select>
    </label>

    <Button
      type="button"
      onClick={() => {
        generateWorkoutInfo();
        handleSaveInfo();
      }}
      className="focus:outline-none"
    >
      Generate Workout
    </Button>
  </form>
        )}
      </div>
    </main>
  );
};

export default WorkoutInfo;
