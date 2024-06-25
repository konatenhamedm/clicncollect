
import React from "react";
  
  // components/Step3.js
  const Step3 = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Step 3</h2>
        <input
          type="text"
          placeholder="Address"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
      </div>
    );
  };
  
  export default Step3;