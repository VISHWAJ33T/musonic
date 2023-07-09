import React from "react";
import { Link } from "react-router-dom";

export default function Search({ id, article }) {
  const handleClick = (event) => {
    const clickedImage = event.target.getAttribute("src");
    document.documentElement.style.setProperty(
      "--image-url",
      `url(${clickedImage})`
    );
  };

  return (
    <>
      <div className="musicItem">
        <Link
          to={`/play/${article[id].title}/${article[id].img.slice(34)}/${
            article[id].id
          }`}
          onClick={handleClick}
        >
          <img
            src={article[id].img}
            onError={(e) =>
              (
                (e.target.src =
                  "https://www.thecurrent.org/images/default-album-art.png")
              )
            }
            alt="not Found"
          />
        </Link>
        <div className="musicTitle">
          <h3>{article[id].title}</h3>
        </div>
      </div>
    </>
  );
}
