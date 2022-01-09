import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from "./Photo.jsx";

function App() {
  let [imageUrl, setImageUrl] = useState("");
  let [imageTitle, setImageTitle] = useState("");

  function showPhoto(response) {
    console.log(response);
    setImageUrl(response.data.hdurl);
    setImageTitle(response.data.title);
  }

  useEffect(() => {
    const apiKey = "ptWGI0lwo6zmVqleMkST6V9CfElUnCJggQwDRgWs";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(showPhoto);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacestagram</h1>
      </header>
      <main>
        <Photo url={imageUrl} title={imageTitle} />
      </main>
      <footer>
        <p>Coded by Lindsay Ward</p>
      </footer>
    </div>
  );
}

export default App;
