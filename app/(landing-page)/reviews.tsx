import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const Reviews = () => {
  const userReviews = [
    {
      name: "Megan Kikuchi",
      rating: 10,
      review: "MovePro has completely transformed my workout routine. The generated workouts are diverse and challenging. I've seen great results!",
    },
    {
      name: "Adam El Gana",
      rating: 8,
      review: "I love the simplicity and effectiveness of MovePro. The warm-up and workout options make it easy to stay on track with my fitness goals.",
    },
    {
        name: "Emily Julian",
        rating: 8,
        review: "I love the simplicity and effectiveness of MovePro. The warm-up and workout options make it easy to stay on track with my fitness goals.",
      },
    // Add more reviews as needed
  ];

  return (
    <div>
      <div className="flex flex-col  bg-gradient-to-l
    from-purple-400 justify-center text-center p-4">
        <h1 className="text-4xl font-medium mb-8 text-center">
          Our User Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 shadow-md transition-transform transform hover:bg-gray-50 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Star size={20} />
                <p className="ml-2 text-purple-600 font-semibold">
                  {review.rating}
                </p>
              </div>
              <p className="text-lg mb-4">{review.review}</p>
              <p className="text-gray-600">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
