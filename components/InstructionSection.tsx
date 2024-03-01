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
          1. Use the two-section generator and to view your workout.
          </h1>
          <h1 className="text-purple-600 m-2">
            2. Warm-up Choice: Pick your warm-up and stretches.
          </h1>
          <h1 className="m-2">
            3. Scroll down again, choose training type, muscle group, and intensity.
          </h1>
          <h1 className="text-purple-600 m-2">
            4. Scroll down once more, log your workout, and go crush it!
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