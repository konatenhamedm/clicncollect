import React from "react";

// components/Step2.js
const Step2 = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Step 2</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
      </div>
    );
  };
  
  export default Step2;