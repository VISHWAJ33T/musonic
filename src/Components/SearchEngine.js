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
  let searchURL = `https://musicapi.x007.workers.dev/search?searchEngine=${searchEngine}&q=${title}`;
  const updateSearch = async () => {
    const data = await fetch(searchURL);
    setLoading(true);
    setProgress(10);
    let parsedData = await data.json();
    setProgress(40);
    setArticle(parsedData.response);
    setProgress(80);
    setLoading(false);
    setProgress(100);
  };

  
  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    updateSearch()
    console.log("article")
    console.log(article)
    console.log("articles")
    console.log(articles)
    return () => {
      updateSearch();
    }
  }, [title]);
  return (
    <div className="searchEngines">
      <h3 className="searchEngineName">{searchEngine}</h3>
      <div className="musicItems">
        {article &&
          !loading &&
          article.map((element, id, result) => {
            return (
              <Search
                key={id}
                id={parseInt(id)}
                article={article}
              />
            );
          }, 80)}
      </div>
    </div>
  );
}
