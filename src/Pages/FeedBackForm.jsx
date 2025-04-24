import React, { useState } from "react";
import { Star } from "lucide-react"; // or use your own star icon

export const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-32 xl:px-48 py-10">
      <div className="w-full bg-white bg-opacity-90 rounded-2xl shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          We value your feedback!
        </h1>

        {submitted ? (
          <p className="text-green-600 text-center">
            Thank you for your feedback!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className="focus:outline-none p-2"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(null)}
                >
                  <Star
                    size={40}
                    fill={star <= (hoveredStar ?? rating) ? "#facc15" : "none"}
                    stroke="#facc15"
                  />
                </button>
              ))}
            </div>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your thoughts here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
