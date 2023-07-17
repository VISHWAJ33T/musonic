import React, { useEffect, useState } from "react";
import NoResults from "./NoResults.js";
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
    setLoading(true);
    const updateSearch = async () => {
      try {
        const data = await fetch(
          `https://musicapi.x007.workers.dev/search?searchEngine=${searchEngine}&q=${encodeURIComponent(
            title
          )}`
        );
        setProgress(10);
        let parsedData = await data.json();
        console.log(parsedData); // Log the API response for debugging
        setProgress(40);
        setArticle(parsedData.response);
        setProgress(80);
        setProgress(100);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching API:", error);
        // Handle the error case and display an error message to the user
      }
    };
    updateSearch();
  }, [title, searchEngine, setLoading, setProgress]);

  return (
    <>
      {article.length !== 0 && (
        <div className="searchEngines">
          <h3 className="searchEngineName">
            {searchEngine === "gaama" ? "Gaana" : false}
          </h3>
          <div className="musicItems">
            {article.length !== 0 ? (
              !loading &&
              article.map((element, id) => {
                return (
                  <Search
                    key={id}
                    id={id}
                    searchEngine="gaama"
                    article={article}
                  />
                );
              })
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      )}
    </>
  );
}
