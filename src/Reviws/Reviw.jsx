import React from 'react';
import ReviewsSection from './ReviewsSection';

const Reviw = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto bg-gray  rounded-lg p-6">
      <div className="flex items-center justify-center ">
  <h1 className="text-5xl font-medium">Review</h1>
</div>

        <ReviewsSection />
      </div>
    </div>
  );
};

export default Reviw;
