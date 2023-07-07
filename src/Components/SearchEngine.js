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
      const data = await fetch(`/api/search?searchEngine=${searchEngine}&q=${encodeURIComponent(title)}`);
      setLoading(true);
      setProgress(10);
      let parsedData = await data.json();
      setProgress(40);
      setArticle(parsedData.response);
      setProgress(80);
      setLoading(false);
      setProgress(100);
    };

    updateSearch();
  }, [title, searchEngine, setLoading, setProgress]);

  return (
    <div className="searchEngines">
      <h3 className="searchEngineName">
        {searchEngine === "seevn"
          ? "JioSaavn"
          : searchEngine === "wunk"
          ? "Wync Music"
          : searchEngine === "gaama"
          ? "Gaana"
          : searchEngine === "mtmusic"
          ? "Search Results"
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
