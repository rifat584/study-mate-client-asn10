import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-base-100">
      <h2 className="text-5xl font-bold text-center mt-30 mb-20">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
          <p className="text-gray-600">
            Add your subjects, study mode, availability, and build your learning
            identity.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">Match With Partners</h3>
          <p className="text-gray-600">
            Browse and filter study partners based on goals, ratings, and
            preferences.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">
            Start Studying Together
          </h3>
          <p className="text-gray-600">
            Connect, plan sessions, and keep each other motivated to achieve
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
