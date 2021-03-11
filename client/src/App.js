import "./App.css";
import React, { useEffect, useState } from "react";
import Grid from "./components/Grid/Grid";

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch("/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-content">
        <Grid characters={characters}></Grid>
      </div>
    </div>
  );
}

export default App;
