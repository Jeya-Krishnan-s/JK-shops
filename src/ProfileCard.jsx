import React from 'react';
import './index.css';

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center bg-custom-image bg-no-repeat bg-cover w-full h-screen">
      <div className="bg-white rounded-3xl shadow-lg p-10 md:p-12 lg:p-20 w-full max-w-sm md:max-w-lg lg:max-w-2xl text-center relative h-[65vh] md:h-[75vh] lg:h-auto">
        
        {/* Profile Image */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile Details */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Samantha Jones</h2>
          <p className="text-gray-500 text-lg">New York, United States</p>
          <p className="mt-4 text-gray-700 text-sm md:text-base lg:text-lg">
            Web Producer - Web Specialist<br />Columbia University - New York
          </p>

          {/* Stats */}
          <div className="flex justify-around mt-8 text-gray-700">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">65</h3>
              <p className="text-sm md:text-base">Friends</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">43</h3>
              <p className="text-sm md:text-base">Photos</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">21</h3>
              <p className="text-sm md:text-base">Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
