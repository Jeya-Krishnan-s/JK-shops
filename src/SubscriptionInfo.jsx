// src/App.jsx
import React from 'react';
import './index.css';

const SubscriptionInfo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-backgroundPurple text-textWhite">
      <div className="max-w-md w-full text-center p-6 bg-secondaryPurple rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="/path-to-your-logo.png" alt="Roulette Rise Logo" className="h-12" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPurple text-white">
          <div className="mt-6 mb-4">
            <div className="flex flex-col items-center">
              {/* Profile Icon with animation */}
              <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center animate-bounce">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 1.791-8 4v2h16v-2c0-2.209-3.582-4-8-4z" />
                </svg>
              </div>
              {/* User Info */}
              <h2 className="mt-2 text-xl font-semibold">Test</h2>
              <p className="text-gray-300">test@gmail.com</p>
            </div>
            {/* Expiration Notice */}
            <p className="text-textGreen mt-4 animate-pulse">Plan Expired in 4 weeks</p>
          </div>
          {/* Subscription Details */}
          <div className="space-y-2">
            <p>Subscription Date: <span className="font-semibold">2024-11-01</span></p>
            <p>Subscription Time: <span className="font-semibold">13:19:47</span></p>
            <p>Subscription Type: <span className="font-semibold">NONE</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
