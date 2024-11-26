import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
        <div>
          <p className="font-bold">{review.name}</p>
          <p className="text-gray-500 text-sm">{review.date}</p>
        </div>
        <div className="ml-auto text-yellow-400">
          {'★'.repeat(review.rating)}
          {'☆'.repeat(5 - review.rating)}
        </div>
      </div>
      <h3 className="font-semibold">{review.title}</h3>
      <p className="text-gray-700">{review.description}</p>
      <div className="flex items-center space-x-4 text-gray-500 text-sm">
        <div className="flex items-center space-x-1">
          <span>Was this review helpful?</span>
          <button className="flex items-center space-x-1">
            👍 <span>{review.helpful}</span>
          </button>
          <button className="flex items-center space-x-1">
            👎 <span>{review.notHelpful}</span>
          </button>
        </div>
        <div className="flex items-center space-x-1">
          <span>Comments ({review.comments})</span>
          <button className="underline">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
