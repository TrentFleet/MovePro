import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import exercises from "../components-data/exerciseData";
import workoutInfoData from "../components-data/workoutInfoData";

// Constants
const LOW_INTENSITY_SETS_RANGE = [1, 4];
const LOW_INTENSITY_REPS_RANGE = [4, 10];
const HIGH_INTENSITY_SETS_RANGE = [4, 8];
const HIGH_INTENSITY_REPS_RANGE = [10, 16];

const WorkoutGenerator = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [intensity, setIntensity] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [warmUp, setWarmUp] = useState("");
  const [postWorkoutStretches, setPostWorkoutStretches] = useState("");
  const [generatedWorkout, setGeneratedWorkout] = useState("");
  const [generatedWorkoutInfo, setGeneratedWorkoutInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const workoutTypes = ["Powerlifting", "Bodybuilding", "Crossfit"];
  const muscleGroups = ["Shoulders", "Chest", "Arms", "Legs", "Core"];
  const workoutDurations = ["15 mins", "30 mins", "45 mins"];
  const warmUpOptions = ["Upper", "Lower", "Full"];
  const stretchesOptions = ["Upper body", "Lower body", "Full body"];

  const generateRandomExercise = (
    type: keyof typeof exercises,
    group: keyof (typeof exercises)[keyof typeof exercises]
  ) => {
    const allExercises = exercises[type][group];
    const shuffledExercises = allExercises.sort(() => Math.random() - 0.5);
    const selectedExercises = shuffledExercises.slice(0, 4);

    const supersetIndexes = [
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
    ];

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

  const handleGenerate = () => {
    setIsLoading(true);

    setTimeout(() => {
      let workout = "";

      if (
        workoutType &&
        muscleGroup &&
        intensity &&
        workoutDuration &&
        warmUp &&
        postWorkoutStretches
      ) {
        const exercises = generateRandomExercise(
          workoutType as "Powerlifting" | "Bodybuilding" | "Crossfit",
          muscleGroup as keyof (typeof exercises)[keyof typeof exercises]
        );

        const exercisesWithSetsReps = exercises.map((exercise: any) => {
          const { sets, reps } = generateRandomSetsReps(intensity);
          return `${exercise}, Sets: ${sets} - Reps: ${reps}`;
        });

        workout = exercisesWithSetsReps.join(", ");
        setGeneratedWorkout(workout);

        // Call generateWorkoutInfo to update workout information
        generateWorkoutInfo();
      } else {
        workout = "Please select all workout options.";
        setGeneratedWorkout("");
        setGeneratedWorkoutInfo("");
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleStartOver = () => {
    setWorkoutType("");
    setMuscleGroup("");
    setIntensity("");
    setWorkoutDuration("");
    setWarmUp("");
    setPostWorkoutStretches("");
    setGeneratedWorkout("");
    setGeneratedWorkoutInfo("");
  };

  const generateWorkoutInfo = () => {
    const selectedWorkoutInfo = workoutInfoData.find(
      (info) => info.duration === workoutDuration
    );

    if (selectedWorkoutInfo) {
      const selectedWarmUp =
        selectedWorkoutInfo.warmUp[warmUp as keyof typeof selectedWorkoutInfo.warmUp];

      if (selectedWarmUp) {
        const formattedExercises = generateRandomExercise(
          workoutType as "Powerlifting" | "Bodybuilding" | "Crossfit",
          muscleGroup as keyof (typeof exercises)[keyof typeof exercises]
        ).map((exercise: any) => {
          const { sets, reps } = generateRandomSetsReps(intensity);
          return `${exercise}, Sets: ${sets} - Reps: ${reps}`;
        });

        const info = `
          Workout Type: ${workoutType}
          Muscle Group: ${muscleGroup}
          Intensity: ${intensity}
          Duration: ${workoutDuration}
          Warm Up: ${selectedWarmUp}
          Exercises: ${formattedExercises.join("\n")}
          Stretches: ${selectedWorkoutInfo.postWorkoutStretches}
        `;

        setGeneratedWorkoutInfo(info);
      } else {
        setGeneratedWorkoutInfo("Invalid warm-up selection.");
      }
    } else {
      setGeneratedWorkoutInfo("Invalid workout duration selected.");
    }
  };

  let generatedWorkoutInfoDisplay = generatedWorkoutInfo;

  return (
    <main className="max-w-2xl mx-auto">
      <div className="m-8 text-center border-2 border-black rounded-lg p-8 bg-white shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          {generatedWorkoutInfoDisplay ? "Your Workout" : "Create the Workout"}
        </h1>

        {generatedWorkoutInfoDisplay && (
          <div className="flex flex-col gap-4 p-1.5 border-t border-gray-300 mt-4">
            {generatedWorkoutInfoDisplay.split("\n").map((line, index) => (
              <div key={index} className="text-sm">
                {line}
              </div>
            ))}
          </div>
        )}

        {!generatedWorkoutInfoDisplay && (
          <form className="mt-4">
            {/* Workout Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Workout Type
              </label>
              <select
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value)}
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="">Select Workout Type</option>
                {workoutTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

                        {/* Warm Up */}
                        <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Warm Up
              </label>
              <select
                value={warmUp}
                onChange={(e) => setWarmUp(e.target.value)}
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="">Select Warm Up</option>
                {warmUpOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Muscle Group */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Muscle Group
              </label>
              <select
                value={muscleGroup}
                onChange={(e) => setMuscleGroup(e.target.value)}
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="">Select Muscle Group</option>
                {muscleGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>

            {/* Intensity */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Intensity
              </label>
              <select
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="">Select Intensity</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Workout Duration */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Workout Duration
              </label>
              <select
                value={workoutDuration}
                onChange={(e) => setWorkoutDuration(e.target.value)}
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="">Select Duration</option>
                {workoutDurations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>


            {/* Post Workout Stretches */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Post Workout Stretches
              </label>
              <select
                value={postWorkoutStretches}
                onChange={(e) => setPostWorkoutStretches(e.target.value)}
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="">Select Stretches</option>
                {stretchesOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center">
              <Button
                type="button"
                onClick={handleGenerate}
                className={`p-2 rounded bg-black text-white focus:outline-none ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate Workout"}
              </Button>
            </div>
          </form>
        )}

        {generatedWorkoutInfoDisplay && (
          <div className="flex flex-col gap-4 items-center mt-4">
            <Button
              type="button"
              onClick={handleStartOver}
              className="p-2 rounded bg-black text-white focus:outline-none"
            >
              Start Over
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default WorkoutGenerator;
