"use client"

import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const MyApiPage: React.FC = () => {
  const [exercises, setExercises] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchExercisesData = async () => {
    try {
      let exercisesData: any[] = [];

      if (searchTerm) {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`,
          exerciseOptions
        );
      } else {
        exercisesData = []; // Set an empty array if searchTerm is empty
      }

      setExercises(exercisesData);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    fetchExercisesData();
  }, [searchTerm]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-4 items-center">
        <h1 className='text-center m-4 text-md justify-center flex flex-col font-semibold items-center'>
          not sure how to do an exercise, try searching for it below
          <ArrowDown/>
        </h1>
        <input
          type="text"
          placeholder="Search for exercises"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border items-center justify-center flex flex-col mx-auto border-gray-300 rounded"
        />
      </div>
      {exercises.length > 0 && (
  <ul className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 gap-8">
    {exercises.slice(0, 3).map((exercise) => (
      <li key={exercise.id} className="bg-white rounded-lg overflow-hidden shadow-md p-6">
        <strong>{exercise.name}</strong>
        <p>Body Part: {exercise.bodyPart}</p>
        <p>Target: {exercise.target}</p>
        <p>Equipment: {exercise.equipment}</p>
        {exercise.gifUrl && (
          <img
            className="mt-4"
            src={exercise.gifUrl}
            alt={`GIF for ${exercise.name}`}
            style={{ maxWidth: '100%' }}
          />
        )}
        {/* Add more details as needed */}
      </li>
    ))}
  </ul>
)}

    </div>
  );
};

export default MyApiPage;
