import { useState } from 'react';
import { Button } from './ui/button';

const InstructionSection = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="m-6">
      {isContentVisible && (
        <div className="flex-col w-64 mx-auto px-auto flex justify-center items-center font-semibold text-md m-4">
  <h1 className="m-2">
    1. Create your personalized workout using the options below.
  </h1>
  <h1 className="text-purple-600 m-2">
    2. Pick your warm-up and stretches for a customized routine.
  </h1>
  <h1 className="m-2">
    3. Select your training type, muscle group, and intensity.
  </h1>
  <h1 className="text-purple-600 m-2">
    4. Click 'Generate Workout' and get ready to crush it!
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