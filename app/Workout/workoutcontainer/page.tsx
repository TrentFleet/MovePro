"use client";

import { Button } from "@/components/ui/button";
import exercises from "../components-data/exerciseData";
import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import WorkoutInfo from "../workoutinfo/page";

// Constants
const LOW_INTENSITY_SETS_RANGE = [1, 4];
const LOW_INTENSITY_REPS_RANGE = [4, 10];
const HIGH_INTENSITY_SETS_RANGE = [4, 8];
const HIGH_INTENSITY_REPS_RANGE = [10, 16];

const WorkoutGenerator = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [intensity, setIntensity] = useState("");
  const [generatedWorkout, setGeneratedWorkout] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const workoutTypes = ["Powerlifting", "Bodybuilding", "Crossfit"];
  const muscleGroups = ["Shoulders", "Chest", "Arms", "Legs", "Core"];

  const generateRandomExercise = (
    type: keyof typeof exercises,
    group: keyof (typeof exercises)[keyof typeof exercises]
  ) => {
    const allExercises = exercises[type][group];
    const shuffledExercises = allExercises.sort(() => Math.random() - 0.5);
    const selectedExercises = shuffledExercises.slice(0, 4);

    // Select two random exercises for superset
    const supersetIndexes = [
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
    ];

    // Add a superset exercise for the selected exercises
    for (const index of supersetIndexes) {
      const supersetExercise = allExercises.find(
        (_, i) => i !== index && !selectedExercises.includes(allExercises[i])
      );

      if (supersetExercise) {
        selectedExercises[index] += ` (Superset with ${supersetExercise})`;
      }
    }

    return selectedExercises;
  };

  const generateRandomSetsReps = (intensity: string) => {
    let sets, reps;

    if (intensity === "Low") {
      sets =
        Math.floor(
          Math.random() *
            (LOW_INTENSITY_SETS_RANGE[1] - LOW_INTENSITY_SETS_RANGE[0] + 1)
        ) + LOW_INTENSITY_SETS_RANGE[0];
      reps =
        Math.floor(
          Math.random() *
            (LOW_INTENSITY_REPS_RANGE[1] - LOW_INTENSITY_REPS_RANGE[0] + 1)
        ) + LOW_INTENSITY_REPS_RANGE[0];
    } else if (intensity === "High") {
      sets =
        Math.floor(
          Math.random() *
            (HIGH_INTENSITY_SETS_RANGE[1] - HIGH_INTENSITY_SETS_RANGE[0] + 1)
        ) + HIGH_INTENSITY_SETS_RANGE[0];
      reps =
        Math.floor(
          Math.random() *
            (HIGH_INTENSITY_REPS_RANGE[1] - HIGH_INTENSITY_REPS_RANGE[0] + 1)
        ) + HIGH_INTENSITY_REPS_RANGE[0];
    }

    return { sets, reps };
  };

  const handleGenerateWorkout = () => {
    setIsLoading(true); // Set loading state to true

    setTimeout(() => {
      let workout = "";

      if (workoutType && muscleGroup && intensity) {
        const exercises = generateRandomExercise(
          workoutType as "Powerlifting" | "Bodybuilding" | "Crossfit",
          muscleGroup as keyof (typeof exercises)[keyof typeof exercises]
        );

        const exercisesWithSetsReps = exercises.map((exercise: any) => {
          const { sets, reps } = generateRandomSetsReps(intensity);
          return `${exercise}, Sets: ${sets} - Reps: ${reps}`;
        });

        workout = exercisesWithSetsReps.join(", ");
      } else {
        workout = "Please select workout type, muscle group, and intensity.";
      }

      setGeneratedWorkout(workout);
      setIsLoading(false); // Set loading state back to false
    }, 1000); // Simulating a delay, replace with actual logic or API call
  };

  return (
<main>
  <div className="justify-center m-8 text-center max-w-sm border-2 rounded-lg p-10 border-black shadow-md transition-transform transform mx-auto">
  <h1 className="text-3xl font-bold">
          Create the Workout
          <div className="justify-center flex m-2 p-6"></div>
        </h1>
    {generatedWorkout ? (
      <div className="flex flex-col gap-4 p-1.5 font-semibold text-xl justify-center">
        {generatedWorkout.split(",").map((exercise, index) => (
          <div className="p-2 rounded-md gap-2 border flex flex-col" key={index}>
            {exercise.split("-").map((info, i) => (
              <div key={i} className="mr-2 text-sm">
                {info.trim()}
              </div>
            ))}
          </div>
        ))}
        <div>
          <Button
            type="button"
            onClick={handleGenerateWorkout}
            className={`gap-2 p-2 m-2 hover:bg-gray-800 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Another Workout"}
          </Button>
          <Button
            type="button"
            onClick={() => setGeneratedWorkout("")}
            className="gap-2 p-2 m-2 hover:bg-gray-800"
          >
            Start Over
          </Button>
        </div>
      </div>
    ) : (
      <form className="mb-2 justify-center flex flex-col">
 <label className="mb-2">
              Workout Type
              <select
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value)}
                className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              >
                <option value="">Select</option>
                {workoutTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="mb-2">
              Muscle Group
              <select
                value={muscleGroup}
                onChange={(e) => setMuscleGroup(e.target.value)}
                className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              >
                <option value="">Select</option>
                {muscleGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </label>

            <label className="mb-2">
              Intensity
              <select
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </label>
            {/* ... (form elements) */}
        <Button
          type="button"
          onClick={handleGenerateWorkout}
          className={`p-2 rounded bg-black focus:outline-none ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Workout"}
        </Button>
      </form>
    )}
  </div>
</main>
  );
};

export default WorkoutGenerator;
