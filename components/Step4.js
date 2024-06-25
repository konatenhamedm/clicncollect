
  
import React from "react";
  
  // components/Step4.js
  const Step4 = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Step 4</h2>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
      </div>
    );
  };
  
  export default Step4;
  