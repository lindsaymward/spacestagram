import React from "react";
import Like from "./Like.jsx";
import "./Photo.css";

export default function Photo(props) {
  return (
    <article className="Photo card">
      <img src={props.url} alt={props.title} className="card-img-top" />
      <div className="card-body">
        <small>{props.date}</small>
        <Like />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.desc}</p>
      </div>
    </article>
  );
}
