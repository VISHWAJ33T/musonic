import React from "react";
import { Link } from "react-router-dom";

export default function Search({ id, article }) {
  const handleClick = (event) => {
    const clickedImage = event.target.getAttribute("src");
    document.documentElement.style.setProperty("--image-url", `url(${clickedImage})`);
  };

  return (
    <>
      <div className="musicItem">
        <Link
          to={`/play/${article[id].title}/${article[id].img.slice(34)}/${article[id].id}`}
          onClick={handleClick}
        >
          <img src={"https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"&&article[id].img} alt="" />
        </Link>
        <div className="musicTitle">
          <h3>{article[id].title}</h3>
        </div>
      </div>
    </>
  );
}
