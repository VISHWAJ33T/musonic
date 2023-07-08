import React, { useEffect, useState } from "react";
import Search from "./Search";

export default function SearchEngine({
  loading,
  searchEngine,
  setProgress,
  setLoading,
  title,
  articles,
  setArticles,
}) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const updateSearch = async () => {
      try {
        const data = await fetch(`https://musicapi.x007.workers.dev/search?searchEngine=${searchEngine}&q=${encodeURIComponent(title)}`);
        setLoading(true);
        setProgress(10);
        let parsedData = await data.json();
        console.log(parsedData); // Log the API response for debugging
        setProgress(40);
        setArticle(parsedData.response);
        setProgress(80);
        setLoading(false);
        setProgress(100);
      } catch (error) {
        console.error('Error fetching API:', error);
        // Handle the error case and display an error message to the user
      }
    };
    updateSearch();
  }, [title, searchEngine, setProgress,setLoading]);

  return (
    <div className="searchEngines">
      <h3 className="searchEngineName">
        {searchEngine === "seevn"
          ? "JioSaavn"
          : searchEngine === "wunk"
          ? "Wync Music"
          : searchEngine === "hemaroo"
          ? "Shemaroo Music"
          // : searchEngine === "gaama"
          // ? "Gaana"
          : searchEngine === "mtmusic"
          ? "YT Music"
          : searchEngine === "hunjama"
          ? "Hungama"
          : searchEngine === "ressa"
          ? "Resso"
          : false}
      </h3>
      <div className="musicItems">
        {!loading &&
          article.map((element, id) => {
            return <Search key={id} id={id} article={article} />;
          })}
      </div>
    </div>
  );
}
