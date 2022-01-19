import React, { useState, useEffect } from "react";
import "./App.css";
import { Rings } from "react-loading-icons";
import axios from "axios";
import Photo from "./Photo.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  let [photo, setPhoto] = useState(null);
  let [click, setClick] = useState(null);

  function displayPhoto(data) {
    setPhoto(
      data.map((url, index) => {
        return (
          <div key={index}>
            <Photo
              url={url.url}
              title={url.title}
              date={url.date}
              desc={url.explanation}
              type={url.media_type}
            />
          </div>
        );
      })
    );
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleClick(event) {
    event.preventDefault();
    setClick(!click);
    scrollToTop();
  }

  useEffect(() => {
    const apiKey = "ptWGI0lwo6zmVqleMkST6V9CfElUnCJggQwDRgWs";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`;
    axios.get(apiUrl).then(showPhoto);
    function showPhoto(response) {
      displayPhoto(response.data);
    }
  }, [click]);

  if (photo === null) {
    return (
      <Rings
        stroke="#003366"
        speed="1.5"
        width="200px"
        height="200px"
        strokeWidth="1"
      />
    );
  } else {
    return (
      <div className="App container">
        <header className="App-header">
          <h1>Spacestagram</h1>
          <p>
            Inspiring photos provided by NASA's Astronomy Picture of the Day
          </p>
        </header>
        <main>
          {photo}
          <button className="btn btn-primary" onClick={handleClick}>
            New photos please!
          </button>
        </main>
        <Footer />
      </div>
    );
  }
}
