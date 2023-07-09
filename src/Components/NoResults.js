import React from "react";
import Nothing from "./noResults.gif";
export default function NoResults() {
  return (
      <div className="notFound">
        <img className="errorGIF" src={Nothing} alt="" />
        <h4>Sorry! Can't find any Song here</h4>
      </div>
  );
}
