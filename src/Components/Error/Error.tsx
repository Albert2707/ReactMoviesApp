import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:flex-row col-span-full">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/752/752755.png"
          alt="error"
          className="h-28 md:h-48 "
        />
      </div>
      <div className="font-mono ">
        <h1 className="text-2xl text-white md:text-3xl">Something went wrong</h1>
      </div>
    </div>
  );
};

export default Error;
