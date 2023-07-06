import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MediaPlayer from "./MediaPlayer";
import Spinner from "./Spinner";
import NoResults from "./NoResults";
import LoadingBar from "react-top-loading-bar";
// import NotFound from "./NotFound";
import Search from "./Search";
export default function Body({ searchEngine, title }) {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  let searchURL = `https://musicapi.x007.workers.dev/search?searchEngine=${searchEngine}&q=${title}`;
  const updateSearch = async () => {
    const data = await fetch(searchURL);
    setLoading(true);
    setProgress(10);
    let parsedData = await data.json();
    console.log(parsedData);
    setProgress(40);
    setArticles(parsedData.response);
    console.log(articles);
    setProgress(80);
    setLoading(false);
    setProgress(100);
  };
  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(articles);
    updateSearch();
  }, [searchEngine, title, articles]);

  return (
    <div className="body">
      <BrowserRouter>
        <>
          <LoadingBar color="white" progress={progress} height={1} />
          {(loading && <Spinner />) ||
          (articles && articles.length === 0 && <NoResults />)}
          <div className="searchEngines">
            <h3 className="searchEngineName">MTMusic</h3>
            <div className="musicItems">
              {articles &&
                articles.map((element, id, result) => {
                  return <Search key={id} id={id} articles={articles} />;
                }, 80)}
            </div>
          </div>
          <Routes>
            <Route
              path={`/play/:id/:musicid`}
              exact
              element={<MediaPlayer articles={articles} />}
            />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}
