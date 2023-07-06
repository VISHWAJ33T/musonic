import React from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="spinnerOut">
      <img src={loading} className="spinner" alt="Please Wait" />
      <h3>Please Wait</h3>
    </div>
  );
};

export default Spinner