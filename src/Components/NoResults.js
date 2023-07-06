import React from "react";
import Nothing from "./noResults.gif";
export default function NoResults() {
  return (
      <div className="notFound">
        <img className="errorGIF" src={Nothing} alt="" />
        <h3>Sorry! Can't find any results</h3>
      </div>
  );
}
