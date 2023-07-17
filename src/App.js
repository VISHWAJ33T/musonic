import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
function App() {
  const [title, setTitle] = useState("top songs hindi");
  return (
    <div className="app">
      <Navbar
        setTitle={setTitle}
      />
      <Body
        title={title}
      />
    </div>
  );
}

export default App;
