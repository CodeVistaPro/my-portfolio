import React, { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import education from "../assets/lottie/Education.json"; // ✅ Fixed path for animation
import urLogo from "../assets/ur_logo.jpeg"; // ✅ Fixed path for university logo

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="education" className="py-10">
      <div className="max-w-5xl mx-auto">
        {/* ✅ Section Title */}
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
        Education
        </h1>


        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* ✅ Left Side: University Details */}
          <div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 w-full md:w-2/3"
            data-aos="fade-right"
          >
            {/* ✅ University Logo */}
            <div className="flex items-center mb-4">
              <img src={urLogo} alt="University of Rochester Logo" className="w-16 h-16 rounded-full mr-4 shadow-md border" />
              <h3 className="text-2xl font-semibold text-[#00040f] dark:text-white">
                University of Rochester <br />
                <span className="text-lg text-gray-600 dark:text-gray-400">(School of Arts & Sciences)</span>
              </h3>
            </div>

            {/* ✅ Degree */}
            <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Masters of Science
            </p>

            {/* ✅ Start & End Date */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              <strong></strong> August 2023
            </p>
            {/* ✅ End date placeholder (future updates ke liye) */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              <strong>End Date:</strong> [Add here if needed]
            </p> */}

            {/* ✅ Stream (Data Science) - Highlighted */}
            <p className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mt-3">
              Data Science
            </p>
          </div>

          {/* ✅ Right Side: Animation */}
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
            <Lottie
              animationData={education}
              loop={true}
              className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
