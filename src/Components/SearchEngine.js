import React, { useEffect, useState } from "react";
import Search from "./Search";

export default function SearchEngine({
  loading,
  searchEngine,
  setProgress,
  setLoading,
  title,
  articles,
  // setArticles,
}) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const updateSearch = async () => {
      try {
        const data = await fetch(`/api?searchEngine=${searchEngine}&q=${encodeURIComponent(title)}`);
        console.log('API response:', data); // Log the API response
        setLoading(true);
        setProgress(10);
        // let parsedData = await data.json();
        // ...
      } catch (error) {
        console.error('Error fetching API:', error);
        // ...
      }
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
