import React from "react";

const Review = () => {
  return (
    <div className="bg-base-100">
      <h2 className="text-5xl font-bold text-center mt-30 mb-20">
        What Students Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-30">
        {/* Review 1 */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full">
                <img src="https://i.ibb.co.com/XZ1gRdkQ/pexels-photo-7092360.jpg" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Sara Ahmed</h3>
          </div>
          <p className="text-gray-600 mb-3">
            StudyMate helped me find a partner who studies the same subject and
            schedule as me. I finally study consistently.
          </p>
          <div className="rating">
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
          </div>
        </div>

        {/* Review 2 */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full">
                <img src="https://i.ibb.co.com/8nhHQYGn/shutterstock-1079701271-1-min-1010x673.jpg" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Tanvir Hasan</h3>
          </div>
          <p className="text-gray-600 mb-3">
            The matching system is clean and simple. I found someone to practice
            physics with every evening.
          </p>
          <div className="rating">
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input type="radio" className="mask mask-star-2 bg-gray-300" />
          </div>
        </div>

        {/* Review 3 */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full">
                <img src="https://i.ibb.co.com/xqBn51mC/student-studying.jpg" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Jannat Zerin</h3>
          </div>
          <p className="text-gray-600 mb-3">
            I used to procrastinate a lot. Studying with a partner changed my
            routine completely.
          </p>
          <div className="rating">
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-yellow-500"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
