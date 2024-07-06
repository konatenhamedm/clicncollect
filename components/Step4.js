import React from "react";

const Step4 = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Step 4</h2>
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Step4;
