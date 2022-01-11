import React, { useState, useEffect } from "react";
import "./App.css";
import { Rings } from "react-loading-icons";
import axios from "axios";
import Photo from "./Photo.jsx";

function App() {
  let [photo, setPhoto] = useState(null);

  function displayPhoto(data) {
    setPhoto(
      data.map((url, index) => {
        return (
          <div key={index}>
            <Photo
              url={url.hdurl}
              title={url.title}
              date={url.date}
              desc={url.explanation}
            />
          </div>
        );
      })
    );
  }

  useEffect(() => {
    const apiKey = "ptWGI0lwo6zmVqleMkST6V9CfElUnCJggQwDRgWs";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`;
    axios.get(apiUrl).then(showPhoto);
    function showPhoto(response) {
      displayPhoto(response.data);
    }
  }, []);

  if (photo === null) {
    return <Rings />;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Spacestagram</h1>
        </header>
        <main>{photo}</main>
        <footer>
          <p>Coded by Lindsay Ward</p>
          <a
            href="https://github.com/lindsaymward/spacestagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi-github" role="img" aria-label="GitHub"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lindsaymward21/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
