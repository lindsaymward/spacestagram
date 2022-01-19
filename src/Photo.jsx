import React from "react";
import Like from "./Like.jsx";
import "./Photo.css";

export default function Photo(props) {
  if (props.type === "image")
    return (
      <article className="Photo card">
        <img src={props.url} alt={props.title} className="card-img-top" />
        <div className="card-header">
          <Like />
        </div>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <h3 className="card-subtitle">{props.date}</h3>
          <p className="card-text">{props.desc}</p>
        </div>
      </article>
    );
  else
    return (
      <article className="Photo card">
        <video src={props.url} alt={props.title} className="card-img-top" />
        <div className="card-header">
          <Like />
        </div>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <h3 className="card-subtitle">{props.date}</h3>
          <p className="card-text">{props.desc}</p>
        </div>
      </article>
    );
}
