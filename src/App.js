import React from "react";
import "./App.css";
import Photo from "./Photo.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacestagram</h1>
      </header>
      <main>
        <Photo />
      </main>
      <footer>
        <p>Coded by Lindsay Ward</p>
      </footer>
    </div>
  );
}

export default App;
