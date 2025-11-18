import React from "react";
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <BounceLoader size={100} speedMultiplier={1} />
      
    </div>
  );
};

export default Spinner;
