import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center gap-1 mt-5 col-span-full">
      <span className="h-6 w-6 rounded-full bg-indigo-400 animate-[bounce_0.9s_infinite_100ms]"></span>
      <span className="w-6 h-6 bg-indigo-400 rounded-full animate-bounce "></span>
      <span className="h-6 w-6 rounded-full bg-indigo-400 animate-[bounce_1s_infinite_100ms]"></span>
    </div>
  );
};

export default Loader;
