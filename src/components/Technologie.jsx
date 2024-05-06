import React from 'react';

const Technologie = ({ text, Icon, iconClassName, className }) => {
  return (
    <div className={` items-center bg-white dark:bg-gray-900 shadow-md rounded-lg p-2 hover:shadow-lg border border-transparent transition duration-500 ease-in-out transform hover:-translate-y-2 ${className}`}>
      <Icon className={`text-4xl ${iconClassName}`} />
      <span className={`flex-1 text-center`}>{text}</span>
    </div>
  );
};

export default Technologie;
