"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// ... other imports

export default function WorkoutLog() {
  const [selectedDate, setSelectedDate] = useState("");
  const [logText, setLogText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [workoutLogs, setWorkoutLogs] = useState([]);

  useEffect(() => {
    const storedLogs = localStorage.getItem("workoutLogs");
    if (storedLogs) {
      setWorkoutLogs(JSON.parse(storedLogs));
    }
  }, []);

  const handleSendEmail = () => {
    const lastLogDate =
      workoutLogs.length > 0
        ? new Date((workoutLogs[0] as { logDate: string }).logDate).getTime()
        : null;

    const currentTime = new Date().getTime();
    const timeSinceLastLog = lastLogDate
      ? currentTime - lastLogDate
      : 24 * 60 * 60 * 1000; // Assume 24 hours if no previous logs

    if (timeSinceLastLog < 24 * 60 * 60 * 1000) {
      alert("You can log a workout once every 24 hours.");
      return;
    }

    const newLog = { logDate: selectedDate, logEmoji: "🔥", logText };
    const newWorkoutLogs: {
      logDate: string;
      logEmoji: string;
      logText: string;
    }[] = [newLog, ...workoutLogs.slice(0, 9)];
    localStorage.setItem("workoutLogs", JSON.stringify(newWorkoutLogs));
    setWorkoutLogs(newWorkoutLogs as never[]);

    // Additional logic to send the log to the user's email
    console.log(newWorkoutLogs);
  };

  const handleRefreshLogs = () => {
    localStorage.removeItem("workoutLogs");
    setWorkoutLogs([]);
  };

  return (
    <main>
      <div className="justify-center flex flex-col mt-6 max-w-sm text-center border-2 rounded-lg p-10 w-full border-black shadow-md mx-auto px-auto ">
        <h1 className="text-3xl font-bold mb-6">Training Diary</h1>
        <form className="mb-2 justify-center flex flex-col items-center">
          <label className="mb-2">
            Date
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="m-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            />
          </label>
          <label className="m-2">
            How was your workout?
            <textarea
              value={logText}
              onChange={(e) => setLogText(e.target.value)}
              className="m-6 p-14 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            ></textarea>
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
              {isLoading ? "Sending..." : "Log Your Results"}
            </Button>
          </div>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Workout History</h2>
          <div className="grid grid-cols-1 justify-center mx-auto gap-4">
            {workoutLogs.map(
              (
                log: { logDate: string; logEmoji: string; logText: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white border flex-col justify-center items-center mx-auto rounded-lg p-4 shadow-md"
                >
                  <p>
                    {new Date(log.logDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>

                  <p>{log.logEmoji}</p>
                  <p>{log.logText}</p>
                </div>
              )
            )}
          </div>
          <Button
            type="button"
            onClick={handleRefreshLogs}
            className="mt-4 bg-red-600 text-white p-2 rounded-md"
          >
            Delete your Logs
          </Button>
        </div>
      </div>
    </main>
  );
}
