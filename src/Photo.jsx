import React from "react";
import Like from "./Like.jsx";
import "./Photo.css";

export default function Photo(props) {
  if (props.url) {
    return (
      <article className="Photo">
        <img src={props.url} alt={props.title} />
        <br />
        <small>{props.date}</small>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Like />
        <br />
      </article>
    );
  } else {
    return "Loading...";
  }
}
