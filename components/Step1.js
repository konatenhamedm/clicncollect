import React from "react";

// components/Step1.js
const Step1 = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Step 1</h2>
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
      </div>
    );
  };
  
  export default Step1;
  
  