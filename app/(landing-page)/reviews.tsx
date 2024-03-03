import React from 'react';

const Reviews = () => {
  const userReviews = [
    {
      name: "Megan Kikuchi",
      review: "I love using MovePro, it's so easy to use!",
    },
    {
      name: "Adam El Gana",
      review: "Simple as",
    },
    {
      name: "Emily Julian",
      review: "Only costs a coffee!",
    },
    {
      name: "Strauss Bessell",
      review: "MovePro helps me mix my workouts up!",
    },

  ];

  return (
    <div>
      <div className="grid max-w-sm items-center grid-cols-1 bg-gradient-to-l from-purple-200 justify-center text-center mx-auto p-6">
        <h1 className="text-4xl font-medium mb-8 text-center">
          Our Testimonials
        </h1>
        <div className="grid grid-cols-2 justify-center gap-2">
          {userReviews.map((review, index,) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 shadow-md transition-transform transform hover:bg-gray-50 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <p className="ml-2 text-purple-600 font-semibold"></p>
              </div>
              <p className="text-md mb-4">{review.review}</p>
              <p className="text-gray-600">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
