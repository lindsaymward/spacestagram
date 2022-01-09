import React from "react";
import Like from "./Like.jsx";
import "./Photo.css";

export default function Photo(props) {
  if (props.url) {
    return (
      <article className="Photo">
        <img src={props.url} alt={props.title} />
        <Like />
      </article>
    );
  } else {
    return "Loading...";
  }
}
