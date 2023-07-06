import React from "react";
import { Link } from "react-router-dom";
export default function Search({ id, articles }) {
  // const handlePosterClick = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  return (
    <>
        <div className="musicItem">
          <div className="musicImage">
            <Link to={`/play/${id}/${articles[id].id}`} 
            // onClick={handlePosterClick}
            >
              <img src={`${articles[id].img}`} alt="" />
            </Link>
          </div>
          <div className="musicTitle"><h3>{articles[id].title}</h3></div>
        </div>
    </>
  );
}
