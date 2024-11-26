import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'jk',
      date: '25 Jul 2019',
      rating: 5,
      title: 'So cute!',
      description:
        'Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis.',
      helpful: 3,
      notHelpful: 0,
      comments: 0,
    },
    {
      id: 2,
      name: 'faizal',
      date: '07 Jul 2019',
      rating: 3,
      title: 'Cute, but too small',
      description:
        'Shall good midst can’t. Have fill own his multiply the divided. Thing great.',
      helpful: 2,
      notHelpful: 1,
      comments: 1,
    },
    {
        id: 3,
      name: 'prathisha',
      date: '07 Jul 2019',
      rating: 3,
      title: 'Cute, beautiful product',
      description:
        'Shall good midst can’t. Have fill own his multiply the divided. Thing great.',
      helpful: 5,
      notHelpful: 1,
      comments: 1,
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        
        <div className="flex items-center space-x-2">
          <p className="text-lg p-8 font-medium">Reviews (3)</p>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-gray-600">(4.0)</span>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">Write Review</button>
      </div>
      <div className="space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
