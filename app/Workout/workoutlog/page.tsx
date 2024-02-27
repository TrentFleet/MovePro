"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const WorkoutLog = () => {
  const [logDate, setLogDate] = useState("");
  const [logText, setLogText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = () => {
    // Implement the logic to send the log to the user's email
    // This can include making an API call or triggering an email service
    // For now, we'll log the data as an example
    console.log("Log Sent to Email:", { logDate, logText });
  };

  return (
    <main>
      <div className="flex justify-center m-4 p-4">
      </div>
      <div className="justify-center text-center max-w-sm border-2 rounded-lg p-20 border-black shadow-md transition-transform transform mx-auto">
        <h1 className="text-3xl font-bold mb-6">Workout Log</h1>
        <form className="mb-2 justify-center flex flex-col items-center">
          <label className="mb-2">
            Date
            <input
              type="date"
              value={logDate}
              onChange={(e) => setLogDate(e.target.value)}
              className="m-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            />
          </label>

          <label className="mb-2">
            How was your workout?
            <textarea
              value={logText}
              onChange={(e) => setLogText(e.target.value)}
              className="m-6 p-20 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            ></textarea>
          </label>

          <div className="flex flex-col gap-4 font-semibold text-md justify-center">
            <Button
              type="button"
              onClick={handleSendEmail}
              className={`gap-2 px-10${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? "Sending..." : "Log your results"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default WorkoutLog;
