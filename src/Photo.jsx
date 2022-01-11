import React from "react";
import Like from "./Like.jsx";
import "./Photo.css";

export default function Photo(props) {
  return (
    <article className="Photo">
      <img src={props.url} alt={props.title} />
      <br />
      <small>{props.date}</small>
      <Like />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>

      <br />
      <hr />
    </article>
  );
}
