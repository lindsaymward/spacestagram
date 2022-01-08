import React, { useState, useEffect } from "react";
import axios from "axios";
import Like from "./Like.jsx";
import "./Photo.css";

export default function Photo() {
  let [load, setLoad] = useState(false);
  let [imageUrl, setImageUrl] = useState(null);

  function showPhoto(response) {
    console.log(response);
    setImageUrl(response.data.hdurl);
    setLoad(true);
  }

  useEffect(() => {
    const apiKey = "ptWGI0lwo6zmVqleMkST6V9CfElUnCJggQwDRgWs";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(showPhoto);
  }, []);

  if (load) {
    return (
      <article className="Photo">
        <img src={imageUrl} alt="NASA" />
        <Like />
      </article>
    );
  } else {
    return "Loading...";
  }
}
