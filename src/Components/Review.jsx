import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="bg-linear-to-br from-primary/10 via-base-100 to-accent/10 py-24 my-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaStar className="w-4 h-4" />
            Loved by 10,000+ students
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Student Success Stories
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real experiences from students who found their perfect study partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-base-100/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "StudyMate helped me find a partner who studies the same subject and
                schedule as me. I finally study consistently."
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://i.ibb.co.com/XZ1gRdkQ/pexels-photo-7092360.jpg"
                    alt="Sara Ahmed"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sara Ahmed</h3>
                  <p className="text-gray-500 text-sm">Medical Student • Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative md:scale-105">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-linear-to-br from-primary to-accent rounded-2xl p-8 text-white h-full">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                ⭐ Top Review
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 text-yellow-300`}
                  />
                ))}
              </div>

              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                "The matching system is clean and simple. I found someone to practice
                physics with every evening."
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co.com/8nhHQYGn/shutterstock-1079701271-1-min-1010x673.jpg"
                  alt="Tanvir Hasan"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <h3 className="font-bold text-lg">Tanvir Hasan</h3>
                  <p className="text-white/70 text-sm">Engineering Student • BUET</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-base-100/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "I used to procrastinate a lot. Studying with a partner changed my
                routine completely."
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://i.ibb.co.com/xqBn51mC/student-studying.jpg"
                    alt="Jannat Zerin"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Jannat Zerin</h3>
                  <p className="text-gray-500 text-sm">Business Student • IBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;