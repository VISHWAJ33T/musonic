import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
function App() {
  const [title, setTitle] = useState("bhussi");
  const [searchEngine, setSearchEngine] = useState("mtmusic");
  return (
    <div className="app">
      <Navbar
        setTitle={setTitle}
      />
      <Body
        searchEngine={searchEngine}
        title={title}
      />
    </div>
  );
}

export default App;
