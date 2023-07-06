import React from "react";
import { Link } from "react-router-dom";
export default function Search({ id, article }) {
  return (
    <>
        <div className="musicItem">
            <Link to={`/play/${article[id].title}/${article[id].img.slice(34)}/${article[id].id}`} 
            >
              <img src={`${article[id].img}`} alt="" />
            </Link>
          <div className="musicTitle"><h3>{article[id].title}</h3></div>
        </div>
    </>
  );
}
