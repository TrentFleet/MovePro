"use client"

import { useState } from 'react';
import { Button } from './ui/button';

const InstructionSection = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="m-6">
      {isContentVisible && (
        <div className="flex-col w-64 mx-auto px-auto flex justify-center items-center font-semibold text-md m-4">
          <h1 className="m-2">
            1. To start using MovePro, begin by selecting your time domain. This
            will determine the duration of your workout.
          </h1>
          <h1 className="text-purple-600 m-2">
            2. Next, choose your warm-up and stretches. Your time domain will be
            based on the combined duration of these.
          </h1>
          <h1 className="m-2">
            3. Scroll down to create your workout. Choose the type of training,
            the muscle group to focus on, and the intensity for the day.
          </h1>
          <h1 className="text-purple-600 m-2">
            4. Lastly, scroll down and log your workout! Get out there and crush
            it!
          </h1>
        </div>
      )}
      <Button onClick={toggleContentVisibility}>
        {isContentVisible ? 'Hide Instructions' : 'Show Instructions'}
      </Button>
    </div>
  );
};

export default InstructionSection;
