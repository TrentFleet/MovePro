

const Reviews = () => {
  const userReviews = [
    {
      name: "Megan Kikuchi",
      review: "I am really loving MovePro I often struggle to come up with Workout Ideas on my own",
    },
    {
      name: "Adam El Gana",
      review: "Simple and Easy.",
    },
    {
        name: "Emily Julian",
        review: "MovePro only costs a coffee and saves you so much time in the gym!",
      },
    // Add more reviews as needed
  ];

  return (
    <div>
      <div className="flex flex-col mx-10 bg-gradient-to-l
    from-purple-400 justify-center text-center p-4">
        <h1 className="text-4xl font-medium mb-8 text-center">
          Testimonals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 shadow-md transition-transform transform hover:bg-gray-50 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <p className="ml-2 text-purple-600 font-semibold">
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
