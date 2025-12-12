import React from "react";
import { 
  HiUser, 
  HiSearch, 
  HiBookOpen, 
  HiCheck, 
  HiArrowRight,
  HiCalendar,
  HiAdjustments,
  HiChartBar,
  HiSparkles
} from "react-icons/hi";
import { BsStars } from "react-icons/bs";

const HowItWorks = () => {
  return (
 <div className="my-20 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-500">
            Get started in minutes and find your perfect study partner today
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-primary/20 via-secondary/40 to-primary/20 -translate-y-1/2 z-0"></div>

          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-between px-[16%] z-0">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative bg-base-100/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                <div className="absolute -top-4 -left-4 w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  1
                </div>

                <div className="w-16 h-16 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <HiUser className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-center">
                  Create Your Profile
                </h3>
                <p className="text-gray-500 text-center leading-relaxed">
                  Add your subjects, study mode, availability, and build your
                  unique learning identity.
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <HiCheck className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Set your subjects & topics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <HiCheck className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Choose availability slots</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative lg:-translate-y-4">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-linear-to-br from-primary to-accent rounded-2xl p-8 text-white h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold shadow-lg">
                  2
                </div>

                <div className="absolute -top-3 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <BsStars className="w-3 h-3" />
                  Smart Matching
                </div>

                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <HiSearch className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-center">
                  Match With Partners
                </h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Browse and filter study partners based on goals, ratings, and
                  preferences.
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <HiSparkles className="w-4 h-4 text-yellow-300 shrink-0" />
                    <span>AI-powered recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <HiAdjustments className="w-4 h-4 text-yellow-300 shrink-0" />
                    <span>Filter by compatibility</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary/50 to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative bg-base-100/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                <div className="absolute -top-4 -left-4 w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  3
                </div>

                <div className="w-16 h-16 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <HiBookOpen className="w-8 h-8 text-secondary" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-center">
                  Start Studying Together
                </h3>
                <p className="text-gray-500 text-center leading-relaxed">
                  Connect, plan sessions, and keep each other motivated to
                  achieve more.
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <HiCalendar className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Schedule study sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <HiChartBar className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Track your progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="btn btn-lg bg-primary border-none text-white hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2">
            Get Started Now
            <HiArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Free to join • No credit card required
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
