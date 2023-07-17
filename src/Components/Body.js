import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import MediaPlayer from "./MediaPlayer";
import MediaPlayerGaana from "./MediaPlayerGaana";
import SearchEngine from "./SearchEngine";
import SearchEngineGaana from "./SearchEngineGaana";
import Spinner from "./Spinner";
export default function Body({ title }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  return (
    <div className="body">
      <BrowserRouter>
        <>
          <LoadingBar color="white" progress={progress} height={3} />
          {loading && <Spinner />}

          <SearchEngine
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"seevn"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />
          <SearchEngineGaana
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"gaama"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />
          <SearchEngine
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"wunk"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />

          <SearchEngine
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"ressa"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />
          <SearchEngine
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"mtmusic"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />
          <SearchEngine
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"hunjama"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />
          <SearchEngine
            loading={loading}
            articles={articles}
            setArticles={setArticles}
            searchEngine={"hemaroo"}
            setLoading={setLoading}
            setProgress={setProgress}
            title={title}
          />
          <div className="mediaPlayerOut">
            <Routes>
              <Route
                path={`/play/:title/:img/:musicid`}
                exact
                element={
                  <>
                    <MediaPlayer articles={articles} />
                  </>
                }
              />
            </Routes>
            <Routes>
              <Route
                path={`/play/gaana/:title/:img/:musicid`}
                exact
                element={
                  <>
                    <MediaPlayerGaana articles={articles} />
                  </>
                }
              />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
}
