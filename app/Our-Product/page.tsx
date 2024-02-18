'use client'

import React, { useState } from "react";
import { NotebookIcon, DumbbellIcon, AppleIcon, TrophyIcon } from "lucide-react";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex items-center mb-8">
          <span className="text-2xl font-semibold">Admin Dashboard</span>
        </div>

        {/* Sidebar Sections */}
        <ul>
          <li className="mb-4">
            <button className="flex items-center">
              <NotebookIcon className="mr-2" />
              Notes
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center">
              <DumbbellIcon className="mr-2" />
              Workouts
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center">
              <AppleIcon className="mr-2" />
              Diet Selections
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center">
              <TrophyIcon className="mr-2" />
              Streaks & Challenges
            </button>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 focus:outline-none lg:hidden"
            >
              {isSidebarOpen ? "Close" : "Open"} Sidebar
            </button>
            {/* Add more header content as needed */}
          </div>
        </header>

        {/* Main Sections */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {/* Notes Section */}
          <section className="mb-4 p-4 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-2">Notes</h2>
            {/* Your notes content goes here */}
          </section>

          {/* Workouts Section */}
          <section className="mb-4 p-4 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-2">Workouts</h2>
            {/* Your workouts content goes here */}
          </section>

          {/* Diet Selections Section */}
          <section className="mb-4 p-4 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-2">Diet Selections</h2>
            {/* Your diet selections content goes here */}
          </section>

          {/* Streaks & Challenges Section */}
          <section className="mb-4 p-4 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-2">Streaks & Challenges</h2>
            {/* Your streaks and challenges content goes here */}
          </section>

          {/* Additional Sections */}
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
