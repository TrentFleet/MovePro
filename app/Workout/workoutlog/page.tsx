"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const WorkoutLog = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const initialLogs: any[] | (() => any[]) = []; // Declare and initialize the initialLogs variable

  const [isLoading, setIsLoading] = useState(false);
  const [workoutLogs, setWorkoutLogs] = useState(initialLogs);


  useEffect(() => {
    // Retrieve workout logs from storage on component mount
    const storedLogs = localStorage.getItem("workoutLogs");
    if (storedLogs) {
      setWorkoutLogs(JSON.parse(storedLogs));
    }
  }, []);

  const handleSendEmail = () => {
    // Check if 24 hours have passed since the last workout log
    const lastLogDate = workoutLogs.length > 0 ? (workoutLogs[0] as { logDate: string }).logDate : null as string | null;
    const currentTime = new Date().getTime();
    const timeSinceLastLog = lastLogDate ? currentTime - new Date(lastLogDate).getTime() : 0;

    // if (timeSinceLastLog < 24 * 60 * 60 * 1000) {
    //   alert("You can log a workout once every 24 hours.");
    //   return;
    // }
    // Log the workout and update the storage
    const newLog = { logDate: selectedDate, logEmoji: "🔥" };
    const newWorkoutLogs: { logDate: string; logEmoji: string; }[] = [newLog, ...workoutLogs.slice(0, 9)]; // Keep only the latest 10 logs
    localStorage.setItem("workoutLogs", JSON.stringify(newWorkoutLogs));
    setWorkoutLogs(newWorkoutLogs);
    // Implement the logic to send the log to the user's email
    // For now, we'll log the data as an example
    console.log(newWorkoutLogs);
    newWorkoutLogs.forEach(log => console.log(log));

    
  };

  const handleRefreshLogs = () => {
    // Clear workout history and refresh the log data
    localStorage.removeItem("workoutLogs");
    setWorkoutLogs([]);
  };

  return (
    <main>
      <div className="flex justify-center m-4 p-4"></div>
      <div className="justify-center text-center max-w-sm border-2 rounded-lg p-20 border-black shadow-md transition-transform transform mx-auto">
        <h1 className="text-3xl font-bold mb-6">Workout Log</h1>
        <form className="mb-2 justify-center flex flex-col items-center">
          <label className="mb-2">
            Date
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            />
          </label>

          <div className="flex flex-col gap-4 font-semibold text-md justify-center">
            <Button
              type="button"
              onClick={handleSendEmail}
              className={`gap-2 px-10${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Log your results"}
            </Button>
          </div>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Workout History</h2>
          <div className="grid grid-cols-2 justify-center mx-auto gap-4">
          {workoutLogs.map((log: { logDate: string; logEmoji: string; }, index: number) => {
            const logDate = new Date(log.logDate);
            const day = logDate.toLocaleDateString(undefined, { day: '2-digit' });
            const month = logDate.toLocaleDateString(undefined, { month: '2-digit' });
            const year = logDate.getFullYear();

            return (
              <div key={index} className="bg-white border flex-col justify-center items-center mx-auto rounded-lg p-4 shadow-md">
                <p>
                  {`${day}/${month}/${year}`}
                </p>
                <p>{log.logEmoji}</p>
              </div>
            );
          })}


          </div>
          <Button
            type="button"
            onClick={handleRefreshLogs}
            className="mt-4 bg-black text-white p-2 rounded-md"
          >
            Refresh Logs
          </Button>
        </div>
      </div>
    </main>
  );
};

export default WorkoutLog;
