import React from "react";

const WorkExperience = () => {
  return (
    <div className="px-6 py-8 bg-gray-800 rounded-lg shadow-md space-y-6 xl:sticky xl:top-4">
      <h2 className="font-extrabold text-gray-400 text-sm">WORK EXPERIENCE</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center gap-2">
          <p className="flex flex-col">
            <span>Project Manager</span>
            <span className="text-sm font-light text-gray-300">
              Devs Around
            </span>
          </p>
          <p>2025 - Present</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="flex flex-col">
            <span>Research Assistant</span>
            <span className="text-sm font-light text-gray-300">
              Independent Researcher
            </span>
          </p>
          <p>2023 - Present</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="flex flex-col">
            <span>Front-End Developer</span>
            <span className="text-sm font-light text-gray-300">
              Infinite Agency
            </span>
          </p>
          <p>2023 - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
