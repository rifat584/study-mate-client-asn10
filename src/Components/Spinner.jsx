import React from "react";
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BounceLoader size={90} speedMultiplier={1} aria-label="Loading" role="status" />
    </div>
  );
};

export default Spinner;